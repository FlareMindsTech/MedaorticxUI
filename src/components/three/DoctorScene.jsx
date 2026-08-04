import React, { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float } from '@react-three/drei';
import { Doctor } from './Doctor';

/* Floating 3D medical icons in the background */
function FloatingParticles() {
  const groupRef = useRef();
  const particles = useMemo(() => {
    const items = [];
    const shapes = ['cross', 'pill', 'ring', 'heart', 'sphere'];
    for (let i = 0; i < 28; i++) {
      items.push({
        shape: shapes[i % shapes.length],
        pos: [
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10 - 4,
        ],
        rot: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        scale: 0.08 + Math.random() * 0.18,
        speed: 0.2 + Math.random() * 0.6,
        offset: Math.random() * Math.PI * 2,
        color: i % 3 === 0 ? '#6D4DE0' : i % 3 === 1 ? '#1FC7C0' : '#8B5CF6',
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const p = particles[i];
        if (p) {
          child.position.y = p.pos[1] + Math.sin(t * p.speed + p.offset) * 0.5;
          child.rotation.x = p.rot[0] + t * p.speed * 0.3;
          child.rotation.z = p.rot[2] + t * p.speed * 0.2;
        }
      });
    }
  });

  const particleMat = useMemo(() => new THREE.MeshStandardMaterial({
    roughness: 0.5,
    metalness: 0.3,
    transparent: true,
    opacity: 0.35,
  }), []);

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.pos} rotation={p.rot} scale={p.scale}>
          {p.shape === 'cross' && <boxGeometry args={[1.5, 0.4, 0.4]} />}
          {p.shape === 'pill' && <capsuleGeometry args={[0.3, 1, 8, 16]} />}
          {p.shape === 'ring' && <torusGeometry args={[0.5, 0.15, 8, 24]} />}
          {p.shape === 'heart' && <sphereGeometry args={[0.5, 12, 12]} />}
          {p.shape === 'sphere' && <dodecahedronGeometry args={[0.5, 0]} />}
          <meshStandardMaterial
            color={p.color}
            roughness={particleMat.roughness}
            metalness={particleMat.metalness}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

export const DoctorScene = () => {
  const rimIndigoRef = useRef();
  const rimTealRef = useRef();

  return (
    <div className="w-full h-full">
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
          toneMapping: THREE.NoToneMapping,
        }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault fov={30} position={[0, 1.45, 6.8]} />

        {/* Lights — key light on face */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 4, 6]} intensity={2.0} />
        <directionalLight position={[-3, 2, 4]} intensity={1.0} />
        <directionalLight position={[3, 2, 4]} intensity={1.0} />
        <pointLight ref={rimIndigoRef} position={[-2.5, 2.5, 2]} color="#6D4DE0" intensity={1.2} distance={14} />
        <pointLight ref={rimTealRef} position={[2.5, 1.5, 2]} color="#1FC7C0" intensity={1.2} distance={14} />
        <spotLight position={[0, 4, 4]} angle={0.4} penumbra={0.5} intensity={1.0} color="#ffffff" />

        {/* Background floating particles */}
        <FloatingParticles />

        {/* Doctor Figure */}
        <Suspense fallback={null}>
          <Doctor rimIndigoRef={rimIndigoRef} rimTealRef={rimTealRef} />
        </Suspense>
      </Canvas>
    </div>
  );
};

