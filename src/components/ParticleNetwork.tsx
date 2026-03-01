"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 80;
const CONNECTION_DISTANCE = 2.5;
const MOUSE_RADIUS = 3;

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef(new THREE.Vector2(9999, 9999));
  const { viewport } = useThree();

  const { positions, velocities } = useMemo(() => {
    const pos: THREE.Vector3[] = [];
    const vel: THREE.Vector3[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 4
        )
      );
      vel.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.004
        )
      );
    }
    return { positions: pos, velocities: vel };
  }, []);

  const lineGeometry = useMemo(() => {
    const maxLines = PARTICLE_COUNT * PARTICLE_COUNT;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(new Float32Array(maxLines * 6), 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(new Float32Array(maxLines * 6), 3));
    geo.setDrawRange(0, 0);
    return geo;
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;

    const dummy = new THREE.Object3D();
    const worldMouse = new THREE.Vector3(
      mouseRef.current.x * viewport.width * 0.5,
      mouseRef.current.y * viewport.height * 0.5,
      0
    );

    // Update particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i].add(velocities[i]);

      // Boundary bounce
      if (Math.abs(positions[i].x) > 6) velocities[i].x *= -1;
      if (Math.abs(positions[i].y) > 4) velocities[i].y *= -1;
      if (Math.abs(positions[i].z) > 2) velocities[i].z *= -1;

      // Mouse repulsion
      const dist = positions[i].distanceTo(worldMouse);
      if (dist < MOUSE_RADIUS) {
        const force = (1 - dist / MOUSE_RADIUS) * 0.02;
        const dir = positions[i].clone().sub(worldMouse).normalize();
        positions[i].add(dir.multiplyScalar(force));
      }

      dummy.position.copy(positions[i]);
      const closeness = Math.max(0, 1 - dist / MOUSE_RADIUS);
      dummy.scale.setScalar(0.03 + closeness * 0.02);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;

    // Update connections
    if (!linesRef.current) return;
    const posAttr = lineGeometry.getAttribute("position") as THREE.BufferAttribute;
    const colAttr = lineGeometry.getAttribute("color") as THREE.BufferAttribute;
    let lineIndex = 0;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const d = positions[i].distanceTo(positions[j]);
        if (d < CONNECTION_DISTANCE) {
          const alpha = 1 - d / CONNECTION_DISTANCE;
          const idx = lineIndex * 6;

          posAttr.array[idx] = positions[i].x;
          posAttr.array[idx + 1] = positions[i].y;
          posAttr.array[idx + 2] = positions[i].z;
          posAttr.array[idx + 3] = positions[j].x;
          posAttr.array[idx + 4] = positions[j].y;
          posAttr.array[idx + 5] = positions[j].z;

          const c = alpha * 0.4;
          colAttr.array[idx] = c * 0.42;
          colAttr.array[idx + 1] = c * 0.62;
          colAttr.array[idx + 2] = c * 0.79;
          colAttr.array[idx + 3] = c * 0.42;
          colAttr.array[idx + 4] = c * 0.62;
          colAttr.array[idx + 5] = c * 0.79;

          lineIndex++;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIndex * 2);
    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color="#6B9FCA" transparent opacity={0.6} />
      </instancedMesh>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={1} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </>
  );
}

export default function ParticleNetwork() {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    // Disable on mobile/tablet devices and when reduced motion is preferred
    const isMobile = window.innerWidth < 1024 || "ontouchstart" in window;
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
    <div className="absolute inset-0 z-[1] opacity-60 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <Suspense fallback={null}>
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
