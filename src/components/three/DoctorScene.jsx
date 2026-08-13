import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, Float, Sparkles } from '@react-three/drei';
import MedicalHelix from './MedicalHelix';
import OrbitingAtoms from './OrbitingAtoms';

/**
 * DoctorScene — Main 3D hero visual for MedAorticX.
 *
 * Renders a procedural DNA helix with orbiting medical-themed atoms,
 * ambient particles, and brand-colored lighting. Fully self-contained
 * Canvas component that can be lazy-loaded.
 */
const DoctorScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 4.2], fov: 40 }}
      dpr={[1, 1.25]}
      frameloop="always"
      resize={{ scroll: false, debounce: { scroll: 0, resize: 0 } }}
      gl={{
        antialias: true,
        alpha: true,
        stencil: false,
        depth: true,
        powerPreference: 'high-performance',
      }}
      style={{
        width: '100%',
        height: '100%',
        background: 'transparent',
        pointerEvents: 'auto',
      }}
    >
      <AdaptiveDpr pixelated />

      {/* ──── Lighting ──── */}
      <ambientLight intensity={0.7} color="#e8e4f0" />

      {/* Indigo rim light — left */}
      <pointLight
        position={[-2.5, 1.5, 2]}
        intensity={2.0}
        color="#6D4DE0"
        distance={10}
        decay={2}
      />

      {/* Teal rim light — right */}
      <pointLight
        position={[2.5, -0.5, 2]}
        intensity={1.8}
        color="#1FC7C0"
        distance={10}
        decay={2}
      />

      {/* Soft key light from above */}
      <directionalLight
        position={[0, 4, 3]}
        intensity={0.6}
        color="#f0eeff"
      />

      {/* Fill light from below for depth */}
      <pointLight
        position={[0, -3, 1]}
        intensity={0.4}
        color="#a78bfa"
        distance={6}
        decay={2}
      />

      {/* ──── Scene Content ──── */}
      <Suspense fallback={null}>
        {/* DNA Helix — gently floating */}
        <Float
          speed={1.2}
          rotationIntensity={0.12}
          floatIntensity={0.25}
          floatingRange={[-0.04, 0.04]}
        >
          <MedicalHelix />
        </Float>

        {/* Orbiting Atoms */}
        <OrbitingAtoms />

        {/* Ambient sparkle particles — indigo */}
        <Sparkles
          count={50}
          scale={4.5}
          size={2}
          speed={0.4}
          opacity={0.35}
          color="#8B5CF6"
        />

        {/* Ambient sparkle particles — teal */}
        <Sparkles
          count={25}
          scale={3.5}
          size={1.2}
          speed={0.3}
          opacity={0.25}
          color="#1FC7C0"
        />
      </Suspense>
    </Canvas>
  );
};

export default DoctorScene;
