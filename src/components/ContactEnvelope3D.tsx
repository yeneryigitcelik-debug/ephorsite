"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

function Envelope() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.3;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.15;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.05 - 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Envelope body */}
      <mesh>
        <boxGeometry args={[1.6, 1, 0.1]} />
        <meshStandardMaterial
          color="#6B9FCA"
          emissive="#2E5A80"
          emissiveIntensity={0.2}
          metalness={0.6}
          roughness={0.3}
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* Envelope flap (triangle using cone) */}
      <mesh position={[0, 0.5, 0.06]} rotation={[0.3, 0, Math.PI]}>
        <coneGeometry args={[0.8, 0.5, 3]} />
        <meshStandardMaterial
          color="#4A82AF"
          emissive="#1B3A5C"
          emissiveIntensity={0.3}
          metalness={0.6}
          roughness={0.3}
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* @ symbol line decorations on envelope */}
      <mesh position={[-0.2, -0.1, 0.06]}>
        <boxGeometry args={[0.6, 0.03, 0.01]} />
        <meshBasicMaterial color="#8BB8DA" transparent opacity={0.4} />
      </mesh>
      <mesh position={[-0.1, -0.22, 0.06]}>
        <boxGeometry args={[0.4, 0.03, 0.01]} />
        <meshBasicMaterial color="#8BB8DA" transparent opacity={0.3} />
      </mesh>

      {/* Glow */}
      <mesh scale={2}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#6B9FCA" transparent opacity={0.02} side={THREE.BackSide} />
      </mesh>

      {/* Floating dots */}
      {[...Array(6)].map((_, i) => (
        <EnvelopeDot key={i} index={i} />
      ))}
    </group>
  );
}

function EnvelopeDot({ index }: { index: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const angle = (index / 6) * Math.PI * 2;
  const speed = 0.2 + Math.random() * 0.2;
  const radius = 1.3 + Math.random() * 0.4;

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + angle;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.y = Math.sin(t * 0.8) * 0.6;
    ref.current.position.z = Math.sin(t) * 0.4;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshBasicMaterial color="#8BB8DA" transparent opacity={0.5} />
    </mesh>
  );
}

export default function ContactEnvelope3D() {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768 || "ontouchstart" in window;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMobile || prefersReducedMotion) {
      setCanRender(false);
      return;
    }
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    setCanRender(!!gl);
  }, []);

  if (!canRender) return null;

  return (
    <div className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none opacity-30">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ position: "absolute", inset: 0 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 3, 5]} intensity={0.7} color="#c0d8f0" />
          <pointLight position={[-2, 1, 3]} intensity={0.4} color="#6B9FCA" distance={8} />
          <Envelope />
        </Suspense>
      </Canvas>
    </div>
  );
}
