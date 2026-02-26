"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, useTexture } from "@react-three/drei";
import { Suspense, useRef, useMemo, useState, useEffect, useCallback, type ReactNode } from "react";
import * as THREE from "three";

// --- Utilities ---
function latLngToPos(lat: number, lng: number, r: number): [number, number, number] {
  const latRad = lat * (Math.PI / 180);
  const lngRad = lng * (Math.PI / 180);
  return [
    r * Math.cos(latRad) * Math.cos(lngRad),
    r * Math.sin(latRad),
    -r * Math.cos(latRad) * Math.sin(lngRad),
  ];
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// --- 81 Provinces of Turkey ---
const PROVINCES: { name: string; lat: number; lng: number }[] = [
  { name: "İstanbul", lat: 41.01, lng: 28.98 },
  { name: "Ankara", lat: 39.93, lng: 32.86 },
  { name: "İzmir", lat: 38.42, lng: 27.14 },
  { name: "Bursa", lat: 40.19, lng: 29.06 },
  { name: "Antalya", lat: 36.9, lng: 30.69 },
  { name: "Adana", lat: 37.0, lng: 35.32 },
  { name: "Konya", lat: 37.87, lng: 32.49 },
  { name: "Gaziantep", lat: 37.06, lng: 37.38 },
  { name: "Şanlıurfa", lat: 37.16, lng: 38.79 },
  { name: "Mersin", lat: 36.8, lng: 34.63 },
  { name: "Diyarbakır", lat: 37.92, lng: 40.23 },
  { name: "Hatay", lat: 36.4, lng: 36.17 },
  { name: "Manisa", lat: 38.62, lng: 27.43 },
  { name: "Kayseri", lat: 38.73, lng: 35.49 },
  { name: "Samsun", lat: 41.27, lng: 36.34 },
  { name: "Balıkesir", lat: 39.65, lng: 27.88 },
  { name: "Kahramanmaraş", lat: 37.58, lng: 36.94 },
  { name: "Van", lat: 38.49, lng: 43.38 },
  { name: "Aydın", lat: 37.85, lng: 27.84 },
  { name: "Denizli", lat: 37.77, lng: 29.09 },
  { name: "Sakarya", lat: 40.69, lng: 30.4 },
  { name: "Tekirdağ", lat: 41.0, lng: 27.52 },
  { name: "Muğla", lat: 37.22, lng: 28.36 },
  { name: "Eskişehir", lat: 39.77, lng: 30.52 },
  { name: "Mardin", lat: 37.31, lng: 40.74 },
  { name: "Trabzon", lat: 41.0, lng: 39.72 },
  { name: "Erzurum", lat: 39.9, lng: 41.27 },
  { name: "Malatya", lat: 38.35, lng: 38.31 },
  { name: "Ordu", lat: 40.98, lng: 37.88 },
  { name: "Afyonkarahisar", lat: 38.75, lng: 30.54 },
  { name: "Sivas", lat: 39.75, lng: 37.02 },
  { name: "Tokat", lat: 40.31, lng: 36.55 },
  { name: "Elazığ", lat: 38.67, lng: 39.22 },
  { name: "Kocaeli", lat: 40.85, lng: 29.88 },
  { name: "Adıyaman", lat: 37.76, lng: 38.28 },
  { name: "Ağrı", lat: 39.72, lng: 43.05 },
  { name: "Amasya", lat: 40.65, lng: 35.83 },
  { name: "Artvin", lat: 41.18, lng: 41.82 },
  { name: "Bilecik", lat: 40.05, lng: 30.0 },
  { name: "Bingöl", lat: 38.88, lng: 40.5 },
  { name: "Bitlis", lat: 38.4, lng: 42.1 },
  { name: "Bolu", lat: 40.73, lng: 31.61 },
  { name: "Burdur", lat: 37.72, lng: 30.29 },
  { name: "Çanakkale", lat: 40.15, lng: 26.41 },
  { name: "Çankırı", lat: 40.6, lng: 33.62 },
  { name: "Çorum", lat: 40.55, lng: 34.95 },
  { name: "Edirne", lat: 41.68, lng: 26.56 },
  { name: "Erzincan", lat: 39.75, lng: 39.5 },
  { name: "Giresun", lat: 40.91, lng: 38.39 },
  { name: "Gümüşhane", lat: 40.46, lng: 39.48 },
  { name: "Hakkari", lat: 37.58, lng: 43.74 },
  { name: "Isparta", lat: 37.76, lng: 30.55 },
  { name: "Kars", lat: 40.6, lng: 43.1 },
  { name: "Kastamonu", lat: 41.38, lng: 33.78 },
  { name: "Kırklareli", lat: 41.73, lng: 27.23 },
  { name: "Kırşehir", lat: 39.15, lng: 34.17 },
  { name: "Kütahya", lat: 39.42, lng: 29.98 },
  { name: "Muş", lat: 38.75, lng: 41.5 },
  { name: "Nevşehir", lat: 38.63, lng: 34.72 },
  { name: "Niğde", lat: 37.97, lng: 34.68 },
  { name: "Rize", lat: 41.02, lng: 40.52 },
  { name: "Siirt", lat: 37.93, lng: 41.94 },
  { name: "Sinop", lat: 42.03, lng: 35.15 },
  { name: "Tunceli", lat: 39.11, lng: 39.55 },
  { name: "Uşak", lat: 38.68, lng: 29.41 },
  { name: "Yozgat", lat: 39.82, lng: 34.81 },
  { name: "Zonguldak", lat: 41.46, lng: 31.79 },
  { name: "Aksaray", lat: 38.37, lng: 34.03 },
  { name: "Bayburt", lat: 40.26, lng: 40.22 },
  { name: "Karaman", lat: 37.18, lng: 33.23 },
  { name: "Kırıkkale", lat: 39.85, lng: 33.51 },
  { name: "Batman", lat: 37.88, lng: 41.13 },
  { name: "Şırnak", lat: 37.42, lng: 42.46 },
  { name: "Bartın", lat: 41.64, lng: 32.34 },
  { name: "Ardahan", lat: 41.11, lng: 42.7 },
  { name: "Iğdır", lat: 39.92, lng: 44.05 },
  { name: "Yalova", lat: 40.66, lng: 29.27 },
  { name: "Karabük", lat: 41.2, lng: 32.63 },
  { name: "Kilis", lat: 36.72, lng: 37.12 },
  { name: "Osmaniye", lat: 37.07, lng: 36.25 },
  { name: "Düzce", lat: 40.84, lng: 31.17 },
];

// Turkey center for zoom target
// Turkey (lat≈39, lng≈35) on sphere: x≈0.955, z≈-0.669
// To face camera (+z), need Y rotation = -atan2(x, -z) - π ≈ -2.18
const TURKEY_CENTER_Y_ROT = -2.18;
const TURKEY_CENTER_X_ROT = 0.05;

// Camera positions — zoomed targets Turkey's light cluster
const CAM_DEFAULT: [number, number, number] = [0, 0.6, 5.5];
const CAM_ZOOMED: [number, number, number] = [0, 1.0, 3.2];

// --- Province Dots (visible when zoomed) ---
function ProvinceDots({ zoom }: { zoom: React.RefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const dotsRef = useRef<THREE.InstancedMesh>(null);
  const count = PROVINCES.length;

  const { positions, offsets } = useMemo(() => {
    const pos: [number, number, number][] = [];
    const off: number[] = [];
    for (const p of PROVINCES) {
      pos.push(latLngToPos(p.lat, p.lng, 1.52));
      off.push(Math.random() * Math.PI * 2);
    }
    return { positions: pos, offsets: off };
  }, []);

  // Set initial transforms
  useEffect(() => {
    if (!dotsRef.current) return;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      dummy.position.set(...positions[i]);
      dummy.scale.setScalar(0.01);
      dummy.updateMatrix();
      dotsRef.current.setMatrixAt(i, dummy.matrix);
    }
    dotsRef.current.instanceMatrix.needsUpdate = true;
  }, [positions, count]);

  useFrame((state) => {
    if (!dotsRef.current || !zoom.current) return;
    const z = zoom.current;
    const visible = z > 0.15;
    const opacity = Math.min(1, (z - 0.15) / 0.3);
    const mat = dotsRef.current.material as THREE.MeshBasicMaterial;
    mat.opacity = visible ? opacity * 0.95 : 0;

    const dummy = new THREE.Object3D();
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      dummy.position.set(...positions[i]);
      const pulse = Math.sin(t * 2.5 + offsets[i]) * 0.3 + 0.7;
      const baseSize = i < 6 ? 0.018 : 0.012; // Bigger for major cities
      dummy.scale.setScalar(visible ? baseSize * pulse * (0.5 + z * 0.5) : 0.001);
      dummy.updateMatrix();
      dotsRef.current.setMatrixAt(i, dummy.matrix);
    }
    dotsRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={dotsRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial
          color="#8BB8DA"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </instancedMesh>
    </group>
  );
}


// --- Logo on Turkey (3D sprite that fades in with zoom) ---
function TurkeyLabel({ position, zoom }: {
  position: [number, number, number];
  zoom: React.RefObject<number>;
}) {
  const texture = useTexture("/logo-white.png");
  const matRef = useRef<THREE.SpriteMaterial>(null);
  const spriteRef = useRef<THREE.Sprite>(null);

  // Logo aspect ratio (roughly 5:1 based on 1536x309)
  const scale: [number, number, number] = [0.5, 0.1, 1];

  useFrame(() => {
    if (!matRef.current || !spriteRef.current) return;
    const z = zoom.current ?? 0;
    // Fade in: starts at zoom 0.15, fully visible at 0.5
    const opacity = Math.min(1, Math.max(0, (z - 0.15) / 0.35));
    matRef.current.opacity = opacity;
    // Scale up slightly as we zoom
    const s = 0.8 + z * 0.4;
    spriteRef.current.scale.set(scale[0] * s, scale[1] * s, 1);
    // Sprites auto-face camera — no manual lookAt needed
  });

  return (
    <sprite ref={spriteRef} position={position} scale={scale}>
      <spriteMaterial
        ref={matRef}
        map={texture}
        transparent
        opacity={0}
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </sprite>
  );
}

// --- Camera Controller (smooth zoom toward Turkey) ---
// Where Turkey sits on globe surface (approximate screen-space target)
const LOOK_DEFAULT: [number, number, number] = [0, 0, 0];
const LOOK_ZOOMED: [number, number, number] = [0, 0.6, 0.5];

function CameraController({ zoom }: { zoom: React.RefObject<number> }) {
  const { camera } = useThree();
  const lookTarget = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    const z = zoom.current ?? 0;
    const speed = 0.08;

    // Move camera position
    camera.position.x = lerp(camera.position.x, lerp(CAM_DEFAULT[0], CAM_ZOOMED[0], z), speed);
    camera.position.y = lerp(camera.position.y, lerp(CAM_DEFAULT[1], CAM_ZOOMED[1], z), speed);
    camera.position.z = lerp(camera.position.z, lerp(CAM_DEFAULT[2], CAM_ZOOMED[2], z), speed);

    // Shift camera look-at toward Turkey when zoomed
    lookTarget.current.x = lerp(lookTarget.current.x, lerp(LOOK_DEFAULT[0], LOOK_ZOOMED[0], z), speed);
    lookTarget.current.y = lerp(lookTarget.current.y, lerp(LOOK_DEFAULT[1], LOOK_ZOOMED[1], z), speed);
    lookTarget.current.z = lerp(lookTarget.current.z, lerp(LOOK_DEFAULT[2], LOOK_ZOOMED[2], z), speed);
    camera.lookAt(lookTarget.current);
  });

  return null;
}

// --- Globe ---
const INITIAL_Y_ROT = -2.18;

function Globe({ isDragging, dragRotation, zoom }: {
  isDragging: boolean;
  dragRotation: React.RefObject<{ x: number; y: number }>;
  zoom: React.RefObject<number>;
}) {
  const ref = useRef<THREE.Group>(null);
  const earthTexture = useTexture("/images/earth-blue.jpg");
  const autoRotationRef = useRef(INITIAL_Y_ROT);
  const labelPos = useMemo<[number, number, number]>(() => latLngToPos(39.5, 33, 1.75), []);

  useFrame(() => {
    if (!ref.current || !dragRotation.current) return;
    const z = zoom.current ?? 0;

    // Auto-rotation (stops when any zoom)
    if (z < 0.01) {
      autoRotationRef.current += 0.0008;
    }

    // Keep autoRotation within π of Turkey target for shortest rotation path
    const diff = autoRotationRef.current - TURKEY_CENTER_Y_ROT;
    if (diff > Math.PI) autoRotationRef.current -= 2 * Math.PI;
    else if (diff < -Math.PI) autoRotationRef.current += 2 * Math.PI;

    // Smoothly snap auto-rotation toward Turkey when zoomed
    if (z > 0.01) {
      const targetAutoY = TURKEY_CENTER_Y_ROT - dragRotation.current.y;
      autoRotationRef.current = lerp(autoRotationRef.current, targetAutoY, 0.08);
    }

    // Gradual lock — reaches 0.75 at first click (z=0.25), fully locked at z≈0.35
    const lock = Math.min(1, z * 3);

    const freeY = autoRotationRef.current + dragRotation.current.y;
    const freeX = dragRotation.current.x;

    ref.current.rotation.y = lerp(freeY, TURKEY_CENTER_Y_ROT, lock);
    ref.current.rotation.x = lerp(freeX, TURKEY_CENTER_X_ROT, lock);
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          color="#b0d0f0"
          emissive="#2a5a8a"
          emissiveIntensity={0.15}
          metalness={0.05}
          roughness={0.8}
        />
      </mesh>

      {/* Province dots */}
      <ProvinceDots zoom={zoom} />

      {/* Logo on Turkey */}
      <TurkeyLabel position={labelPos} zoom={zoom} />

      {/* Atmosphere */}
      <mesh scale={1.65}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#4A82AF"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

// --- Controls (drag only, no scroll) ---
function Controls({ onDragStateChange, dragRotation, zoom }: {
  onDragStateChange: (dragging: boolean) => void;
  dragRotation: React.RefObject<{ x: number; y: number }>;
  zoom: React.RefObject<number>;
}) {
  const { gl } = useThree();
  const isDraggingRef = useRef(false);
  const previousMouseRef = useRef({ x: 0, y: 0 });

  const handlePointerDown = useCallback((e: PointerEvent) => {
    isDraggingRef.current = true;
    previousMouseRef.current = { x: e.clientX, y: e.clientY };
    onDragStateChange(true);
    gl.domElement.style.cursor = "grabbing";
  }, [gl, onDragStateChange]);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!isDraggingRef.current || !dragRotation.current) return;
    const z = zoom.current ?? 0;
    const sensitivity = 0.005 * (1 - z * 0.7);
    const deltaX = e.clientX - previousMouseRef.current.x;
    const deltaY = e.clientY - previousMouseRef.current.y;
    dragRotation.current.y += deltaX * sensitivity;
    dragRotation.current.x += deltaY * sensitivity * 0.6;
    dragRotation.current.x = Math.max(-0.8, Math.min(0.8, dragRotation.current.x));
    previousMouseRef.current = { x: e.clientX, y: e.clientY };
  }, [dragRotation, zoom]);

  const handlePointerUp = useCallback(() => {
    isDraggingRef.current = false;
    onDragStateChange(false);
    gl.domElement.style.cursor = "grab";
  }, [gl, onDragStateChange]);

  useEffect(() => {
    const dom = gl.domElement;
    dom.style.cursor = "grab";
    dom.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      dom.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [gl, handlePointerDown, handlePointerMove, handlePointerUp]);

  return null;
}

// --- Scene ---
function AboutSceneInner({ zoom }: { zoom: React.RefObject<number> }) {
  const [isDragging, setIsDragging] = useState(false);
  const dragRotation = useRef({ x: 0, y: 0 });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 3, 5]} intensity={1.0} color="#c0d8f0" />
      <pointLight position={[3, 2, 3]} intensity={0.7} color="#8BB8DA" distance={12} />
      <pointLight position={[-2, -1, 2]} intensity={0.4} color="#6B9FCA" distance={10} />

      <Globe isDragging={isDragging} dragRotation={dragRotation} zoom={zoom} />
      <CameraController zoom={zoom} />
      <Controls onDragStateChange={setIsDragging} dragRotation={dragRotation} zoom={zoom} />
      <Environment preset="night" />
    </>
  );
}

// --- Zoom Buttons ---
function ZoomButtons({ zoom }: { zoom: React.RefObject<number> }) {
  const handleZoomIn = useCallback(() => {
    zoom.current = Math.min(1, (zoom.current ?? 0) + 0.25);
  }, [zoom]);

  const handleZoomOut = useCallback(() => {
    zoom.current = Math.max(0, (zoom.current ?? 0) - 0.25);
  }, [zoom]);

  return (
    <div style={{
      position: "absolute",
      bottom: 24,
      right: 24,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      zIndex: 50,
      pointerEvents: "auto",
    }}>
      <button
        onClick={handleZoomIn}
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid rgba(139, 184, 218, 0.3)",
          background: "rgba(10, 25, 47, 0.7)",
          backdropFilter: "blur(8px)",
          color: "#8BB8DA",
          fontSize: 20,
          fontWeight: 300,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto",
        }}
        aria-label="Zoom in"
      >+</button>
      <button
        onClick={handleZoomOut}
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid rgba(139, 184, 218, 0.3)",
          background: "rgba(10, 25, 47, 0.7)",
          backdropFilter: "blur(8px)",
          color: "#8BB8DA",
          fontSize: 20,
          fontWeight: 300,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto",
        }}
        aria-label="Zoom out"
      >{"\u2212"}</button>
    </div>
  );
}

// --- Canvas Wrapper ---
export function AboutScene3D() {
  const [canRender, setCanRender] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const zoom = useRef(0);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    setCanRender(!!gl);
  }, []);

  if (!canRender) {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-[var(--brand-blue)]/[0.04] blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-[var(--brand-blue-dark)]/[0.03] blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>
    );
  }

  return (
    <div
      className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <Canvas
        camera={{ position: [0, 0.6, 5.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={() => setIsLoaded(true)}
        style={{ position: "absolute", inset: 0, pointerEvents: "auto" }}
      >
        <Suspense fallback={null}>
          <AboutSceneInner zoom={zoom} />
        </Suspense>
      </Canvas>
      <ZoomButtons zoom={zoom} />
    </div>
  );
}
