"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Suspense, useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

// --- Brand Data ---
const brands = [
  "Samsung", "Apple", "Huawei", "Xiaomi", "Oppo", "LG",
  "Sony", "Philips", "Vestel", "HP", "Lenovo", "Dell",
  "Asus", "Bosch", "Siemens", "Arçelik", "Beko", "Casper",
];

// --- Constants ---
const COLS = 6;
const ROWS = 3;
const CARD_W = 1.1;
const CARD_H = 0.7;
const GAP = 0.15;
const FONT_URL = "/fonts/Syne-Bold.ttf";

// --- Utilities ---
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// --- Pre-computed Positions ---
const gridPositions: [number, number, number][] = (() => {
  const positions: [number, number, number][] = [];
  const totalW = COLS * CARD_W + (COLS - 1) * GAP;
  const totalH = ROWS * CARD_H + (ROWS - 1) * GAP;
  for (let i = 0; i < brands.length; i++) {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const x = col * (CARD_W + GAP) - totalW / 2 + CARD_W / 2;
    const y = -(row * (CARD_H + GAP) - totalH / 2 + CARD_H / 2);
    positions.push([x, y, 0]);
  }
  return positions;
})();

const scatteredData: { pos: [number, number, number]; rot: [number, number, number] }[] = (() => {
  const result: { pos: [number, number, number]; rot: [number, number, number] }[] = [];
  const rand = seededRandom(42);
  for (let i = 0; i < brands.length; i++) {
    const radius = 2.5 + rand() * 2;
    const theta = rand() * Math.PI * 2;
    const phi = Math.acos(2 * rand() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta) * 0.7;
    const z = -0.5 - rand() * 2.5;
    result.push({
      pos: [x, y, z],
      rot: [(rand() - 0.5) * 0.6, (rand() - 0.5) * 0.8, (rand() - 0.5) * 0.3],
    });
  }
  return result;
})();

// --- BrandCard ---
function BrandCard({
  name,
  index,
  scrollRef,
}: {
  name: string;
  index: number;
  scrollRef: React.RefObject<number>;
}) {
  const groupRef = useRef<THREE.Group>(null);

  const gridPos = gridPositions[index];
  const scattered = scatteredData[index];
  const staggerDelay = index * 0.012;

  const edgesGeom = useMemo(() => {
    const plane = new THREE.PlaneGeometry(CARD_W, CARD_H);
    const edges = new THREE.EdgesGeometry(plane);
    plane.dispose();
    return edges;
  }, []);

  const materials = useMemo(
    () => ({
      bg: new THREE.MeshStandardMaterial({
        color: new THREE.Color("#111722"),
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        roughness: 0.7,
        metalness: 0.1,
      }),
      edge: new THREE.LineBasicMaterial({
        color: new THREE.Color("#6B9FCA"),
        transparent: true,
        opacity: 0,
      }),
      corner: new THREE.MeshBasicMaterial({
        color: new THREE.Color("#6B9FCA"),
        transparent: true,
        opacity: 0,
      }),
    }),
    [],
  );

  useEffect(
    () => () => {
      edgesGeom.dispose();
      materials.bg.dispose();
      materials.edge.dispose();
      materials.corner.dispose();
    },
    [edgesGeom, materials],
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    const scroll = scrollRef.current ?? 0;
    const t = state.clock.elapsedTime;

    // Fade in at beginning of section
    const fadeIn = Math.min(1, scroll / 0.1);

    // Gather progress with stagger
    const rawProgress = (scroll - 0.25 - staggerDelay) / 0.35;
    const cardProgress = easeInOutCubic(Math.max(0, Math.min(1, rawProgress)));

    // Position
    groupRef.current.position.x = lerp(scattered.pos[0], gridPos[0], cardProgress);
    groupRef.current.position.y = lerp(scattered.pos[1], gridPos[1], cardProgress);
    groupRef.current.position.z = lerp(scattered.pos[2], gridPos[2], cardProgress);

    // Breathing in settled phase
    if (cardProgress > 0.95) {
      groupRef.current.position.y += Math.sin(t * 1.5 + index * 0.35) * 0.02;
    }

    // Rotation
    groupRef.current.rotation.x = lerp(scattered.rot[0], 0, cardProgress);
    groupRef.current.rotation.y = lerp(scattered.rot[1], 0, cardProgress);
    groupRef.current.rotation.z = lerp(scattered.rot[2], 0, cardProgress);

    // Material opacities
    materials.bg.opacity = lerp(0.35, 0.85, cardProgress) * fadeIn;
    materials.edge.opacity = lerp(0.15, 0.5, cardProgress) * fadeIn;
    materials.corner.opacity = lerp(0.1, 0.6, cardProgress) * fadeIn;
  });

  return (
    <group ref={groupRef}>
      {/* Card background */}
      <mesh material={materials.bg}>
        <planeGeometry args={[CARD_W, CARD_H]} />
      </mesh>

      {/* Edge lines */}
      <lineSegments geometry={edgesGeom} material={materials.edge} />

      {/* Corner accents: top-left */}
      <group position={[-CARD_W / 2, CARD_H / 2, 0.005]}>
        <mesh position={[0.06, 0, 0]} material={materials.corner}>
          <planeGeometry args={[0.12, 0.006]} />
        </mesh>
        <mesh position={[0, -0.06, 0]} material={materials.corner}>
          <planeGeometry args={[0.006, 0.12]} />
        </mesh>
      </group>

      {/* Corner accents: bottom-right */}
      <group position={[CARD_W / 2, -CARD_H / 2, 0.005]}>
        <mesh position={[-0.06, 0, 0]} material={materials.corner}>
          <planeGeometry args={[0.12, 0.006]} />
        </mesh>
        <mesh position={[0, 0.06, 0]} material={materials.corner}>
          <planeGeometry args={[0.006, 0.12]} />
        </mesh>
      </group>

      {/* Brand name */}
      <Text
        font={FONT_URL}
        fontSize={0.09}
        color="#F0F4F8"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0.01]}
        maxWidth={CARD_W - 0.15}
      >
        {name}
      </Text>
    </group>
  );
}

// --- Central Orb ---
function CentralOrb({ scrollRef }: { scrollRef: React.RefObject<number> }) {
  const coreRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (!coreRef.current) return;
    const scroll = scrollRef.current ?? 0;
    const t = state.clock.elapsedTime;

    // Visibility: fade in -> hold -> fade out during gather
    let alpha: number;
    if (scroll < 0.05) {
      alpha = scroll / 0.05;
    } else if (scroll < 0.25) {
      alpha = 1;
    } else {
      alpha = Math.max(0, 1 - (scroll - 0.25) / 0.25);
    }

    // Pulse
    const pulse = Math.sin(t * 2) * 0.08 + 1;
    coreRef.current.scale.setScalar(0.25 * pulse);

    const coreMat = coreRef.current.material as THREE.MeshStandardMaterial;
    coreMat.opacity = alpha * 0.7;
    coreMat.emissiveIntensity = alpha * 2.5;

    if (glowRef.current) {
      glowRef.current.scale.setScalar(0.6 * pulse);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity = alpha * 0.12;
    }

    if (lightRef.current) {
      lightRef.current.intensity = alpha * 2.5;
    }

    coreRef.current.rotation.y = t * 0.5;
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#4A82AF"
          emissive="#6B9FCA"
          emissiveIntensity={0}
          transparent
          opacity={0}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshBasicMaterial
          color="#6B9FCA"
          transparent
          opacity={0}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <pointLight ref={lightRef} color="#6B9FCA" intensity={0} distance={10} decay={2} />
    </group>
  );
}

// --- Responsive Scaling ---
function SceneContent({ scrollRef }: { scrollRef: React.RefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame(() => {
    if (!groupRef.current) return;
    const gridW = COLS * CARD_W + (COLS - 1) * GAP;
    const gridH = ROWS * CARD_H + (ROWS - 1) * GAP;
    const scaleX = (viewport.width * 0.88) / gridW;
    const scaleY = (viewport.height * 0.5) / gridH;
    const scale = Math.min(scaleX, scaleY, 1.3);
    groupRef.current.scale.setScalar(scale);
  });

  return (
    <group ref={groupRef} position={[0, -0.15, 0]}>
      <CentralOrb scrollRef={scrollRef} />
      {brands.map((brand, i) => (
        <BrandCard key={brand} name={brand} index={i} scrollRef={scrollRef} />
      ))}
    </group>
  );
}

// --- Inner Scene ---
function BrandRevealSceneInner({ scrollRef }: { scrollRef: React.RefObject<number> }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={0.8} color="#c0d8f0" />
      <pointLight position={[4, 2, 4]} intensity={0.5} color="#8BB8DA" distance={15} />
      <pointLight position={[-3, -1, 3]} intensity={0.3} color="#6B9FCA" distance={12} />
      <SceneContent scrollRef={scrollRef} />
    </>
  );
}

// --- Exported Canvas Wrapper ---
export default function BrandReveal3DScene({
  scrollRef,
}: {
  scrollRef: React.RefObject<number>;
}) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={isMobile ? [1, 1] : [1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <BrandRevealSceneInner scrollRef={scrollRef} />
      </Suspense>
    </Canvas>
  );
}
