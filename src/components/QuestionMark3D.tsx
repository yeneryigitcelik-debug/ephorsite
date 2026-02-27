"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

function QuestionMark() {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.4;
      groupRef.current.position.y = Math.sin(t * 0.6) * 0.15;
    }
    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.03 + Math.sin(t * 1.5) * 0.015;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Background glow sphere */}
      <mesh ref={glowRef} scale={2.5}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#6B9FCA" transparent opacity={0.03} side={THREE.BackSide} />
      </mesh>

      {/* Question mark made of torus + sphere */}
      <group>
        {/* Curved part of ? */}
        <mesh position={[0, 0.25, 0]} rotation={[0, 0, -0.2]}>
          <torusGeometry args={[0.55, 0.1, 16, 32, Math.PI * 1.5]} />
          <meshStandardMaterial
            color="#6B9FCA"
            emissive="#2E5A80"
            emissiveIntensity={0.3}
            metalness={0.7}
            roughness={0.2}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Stem of ? */}
        <mesh position={[0, -0.15, 0]}>
          <cylinderGeometry args={[0.08, 0.1, 0.4, 12]} />
          <meshStandardMaterial
            color="#6B9FCA"
            emissive="#2E5A80"
            emissiveIntensity={0.3}
            metalness={0.7}
            roughness={0.2}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Dot of ? */}
        <mesh position={[0, -0.55, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#8BB8DA"
            emissive="#4A82AF"
            emissiveIntensity={0.5}
            metalness={0.7}
            roughness={0.2}
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>

      {/* Floating particles around */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <FloatingDot key={i} angle={angle} />
        );
      })}
    </group>
  );
}

function FloatingDot({ angle }: { angle: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const speed = 0.3 + Math.random() * 0.3;
  const radius = 1.2 + Math.random() * 0.5;

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + angle;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.y = Math.sin(t * 0.7) * 0.8;
    ref.current.position.z = Math.sin(t) * radius * 0.3;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color="#8BB8DA" transparent opacity={0.5} />
    </mesh>
  );
}

export default function QuestionMark3D() {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    setCanRender(!!gl);
  }, []);

  if (!canRender) return null;

  return (
    <div className="absolute right-0 top-0 w-[300px] h-[300px] z-0 pointer-events-none opacity-60 hidden lg:block">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ position: "absolute", inset: 0 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 3, 5]} intensity={0.8} color="#c0d8f0" />
          <pointLight position={[-2, 1, 3]} intensity={0.5} color="#6B9FCA" distance={8} />
          <QuestionMark />
        </Suspense>
      </Canvas>
    </div>
  );
}
