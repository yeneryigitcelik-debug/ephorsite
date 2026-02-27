"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Simple 3D device shapes using basic geometries
function Device({ position, rotation, speed, shape }: {
  position: [number, number, number];
  rotation: [number, number, number];
  speed: number;
  shape: "phone" | "laptop" | "fridge" | "washer" | "tv";
}) {
  const ref = useRef<THREE.Group>(null);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.position.y = position[1] + Math.sin(t + offset) * 0.3;
    ref.current.rotation.y = rotation[1] + Math.sin(t * 0.5 + offset) * 0.3;
    ref.current.rotation.x = rotation[0] + Math.cos(t * 0.3 + offset) * 0.1;
  });

  const color = "#6B9FCA";
  const emissive = "#2E5A80";

  return (
    <group ref={ref} position={position} rotation={rotation}>
      {shape === "phone" && (
        <group>
          <mesh>
            <boxGeometry args={[0.35, 0.65, 0.04]} />
            <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.15} metalness={0.8} roughness={0.2} transparent opacity={0.7} />
          </mesh>
          <mesh position={[0, 0, 0.025]}>
            <planeGeometry args={[0.28, 0.52]} />
            <meshStandardMaterial color="#0a1929" emissive="#1B3A5C" emissiveIntensity={0.3} />
          </mesh>
        </group>
      )}
      {shape === "laptop" && (
        <group>
          {/* Base */}
          <mesh position={[0, -0.15, 0]} rotation={[-0.1, 0, 0]}>
            <boxGeometry args={[0.8, 0.04, 0.5]} />
            <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.15} metalness={0.8} roughness={0.2} transparent opacity={0.7} />
          </mesh>
          {/* Screen */}
          <mesh position={[0, 0.12, -0.22]} rotation={[0.3, 0, 0]}>
            <boxGeometry args={[0.75, 0.5, 0.03]} />
            <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.15} metalness={0.8} roughness={0.2} transparent opacity={0.7} />
          </mesh>
          <mesh position={[0, 0.12, -0.2]} rotation={[0.3, 0, 0]}>
            <planeGeometry args={[0.65, 0.4]} />
            <meshStandardMaterial color="#0a1929" emissive="#1B3A5C" emissiveIntensity={0.3} />
          </mesh>
        </group>
      )}
      {shape === "fridge" && (
        <group>
          <mesh>
            <boxGeometry args={[0.4, 0.8, 0.35]} />
            <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.15} metalness={0.6} roughness={0.3} transparent opacity={0.7} />
          </mesh>
          {/* Door line */}
          <mesh position={[0, 0.05, 0.18]}>
            <boxGeometry args={[0.35, 0.005, 0.001]} />
            <meshStandardMaterial color="#4A82AF" />
          </mesh>
          {/* Handle */}
          <mesh position={[0.15, 0.25, 0.18]}>
            <boxGeometry args={[0.02, 0.12, 0.02]} />
            <meshStandardMaterial color="#8BB8DA" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      )}
      {shape === "washer" && (
        <group>
          <mesh>
            <boxGeometry args={[0.45, 0.5, 0.35]} />
            <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.15} metalness={0.6} roughness={0.3} transparent opacity={0.7} />
          </mesh>
          {/* Door circle */}
          <mesh position={[0, -0.03, 0.18]}>
            <ringGeometry args={[0.1, 0.14, 24]} />
            <meshStandardMaterial color="#8BB8DA" metalness={0.9} roughness={0.1} side={THREE.DoubleSide} />
          </mesh>
        </group>
      )}
      {shape === "tv" && (
        <group>
          <mesh>
            <boxGeometry args={[0.8, 0.5, 0.04]} />
            <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.15} metalness={0.8} roughness={0.2} transparent opacity={0.7} />
          </mesh>
          <mesh position={[0, 0, 0.025]}>
            <planeGeometry args={[0.72, 0.42]} />
            <meshStandardMaterial color="#0a1929" emissive="#1B3A5C" emissiveIntensity={0.3} />
          </mesh>
          {/* Stand */}
          <mesh position={[0, -0.3, 0]}>
            <boxGeometry args={[0.3, 0.04, 0.15]} />
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} transparent opacity={0.7} />
          </mesh>
        </group>
      )}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#c0d8f0" />
      <pointLight position={[-3, 2, 3]} intensity={0.4} color="#6B9FCA" distance={10} />

      <Device position={[-3.5, 1.5, -1]} rotation={[0.2, 0.5, 0.1]} speed={0.4} shape="phone" />
      <Device position={[3.5, -1, -0.5]} rotation={[-0.1, -0.3, 0]} speed={0.35} shape="laptop" />
      <Device position={[-2.5, -1.5, -2]} rotation={[0, 0.8, 0]} speed={0.3} shape="fridge" />
      <Device position={[2.5, 1.8, -1.5]} rotation={[0.1, -0.5, 0.05]} speed={0.45} shape="washer" />
      <Device position={[0.5, -2, -1]} rotation={[0, 0.2, 0]} speed={0.38} shape="tv" />
    </>
  );
}

export default function FloatingDevices() {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    setCanRender(!!gl);
  }, []);

  if (!canRender) return null;

  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ position: "absolute", inset: 0 }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
