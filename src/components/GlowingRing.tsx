"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, forwardRef, useState, useEffect } from "react";
import * as THREE from "three";

const OrbitingParticles = forwardRef<THREE.Points, { positions: Float32Array }>(
  function OrbitingParticles({ positions }, ref) {
    const geoRef = useRef<THREE.BufferGeometry>(null);

    useEffect(() => {
      if (geoRef.current) {
        geoRef.current.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      }
    }, [positions]);

    // Dispose geometry on unmount
    useEffect(() => {
      return () => {
        geoRef.current?.dispose();
      };
    }, []);

    return (
      <points ref={ref}>
        <bufferGeometry ref={geoRef} />
        <pointsMaterial color="#8BB8DA" size={0.04} transparent opacity={0.6} sizeAttenuation blending={THREE.AdditiveBlending} />
      </points>
    );
  }
);

function Ring() {
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const particlePositions = useRef(new Float32Array(60 * 3));

  useEffect(() => {
    for (let i = 0; i < 60; i++) {
      const angle = (i / 60) * Math.PI * 2;
      const r = 1.8 + (Math.random() - 0.5) * 0.3;
      particlePositions.current[i * 3] = Math.cos(angle) * r;
      particlePositions.current[i * 3 + 1] = Math.sin(angle) * r;
      particlePositions.current[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
    }
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.15;
      ringRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.1;
      ring2Ref.current.rotation.y = Math.cos(t * 0.15) * 0.15;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.z = t * 0.08;
    }
  });

  return (
    <group>
      {/* Outer ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.8, 0.02, 16, 80]} />
        <meshBasicMaterial color="#6B9FCA" transparent opacity={0.4} />
      </mesh>

      {/* Inner ring */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.4, 0.015, 16, 60]} />
        <meshBasicMaterial color="#4A82AF" transparent opacity={0.25} />
      </mesh>

      {/* Glow ring */}
      <mesh>
        <torusGeometry args={[1.6, 0.15, 8, 60]} />
        <meshBasicMaterial color="#6B9FCA" transparent opacity={0.03} side={THREE.DoubleSide} />
      </mesh>

      {/* Orbiting particles */}
      <OrbitingParticles ref={particlesRef} positions={particlePositions.current} />
    </group>
  );
}

export default function GlowingRing() {
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
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ position: "absolute", inset: 0 }}
      >
        <Suspense fallback={null}>
          <Ring />
        </Suspense>
      </Canvas>
    </div>
  );
}
