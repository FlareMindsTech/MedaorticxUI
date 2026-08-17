import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  AdaptiveDpr,
  Sparkles,
  Bounds,
  useGLTF,
  useAnimations,
} from '@react-three/drei';
import * as THREE from 'three';

const DoctorModel = () => {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/doctor-optimized.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
  if (names.length > 0) {
    const action = actions[names[0]];
    action.reset();
    action.setLoop(THREE.LoopRepeat, Infinity); // force continuous looping
    action.clampWhenFinished = false;
    action.fadeIn(0.4).play();
    return () => action.fadeOut(0.4);
  }
}, [actions, names]);

  return (
    <group ref={group}>
      <primitive object={scene} rotation={[0, -0.1, 0]} />
    </group>
  );
};

useGLTF.preload('/models/doctor-optimized.glb');

const DoctorScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 40 }}
      dpr={[1, 1.25]}
      frameloop="always"
      gl={{
        antialias: true,
        alpha: true,
        stencil: false,
        depth: true,
        powerPreference: 'high-performance',
      }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <AdaptiveDpr pixelated />

      <ambientLight intensity={1.1} color="#e8e4f0" />
      <pointLight position={[-2.5, 2, 2]} intensity={2.2} color="#6D4DE0" distance={10} decay={2} />
      <pointLight position={[2.5, 0, 2]} intensity={2} color="#1FC7C0" distance={10} decay={2} />
      <directionalLight position={[0, 4, 4]} intensity={1} color="#ffffff" />
      <pointLight position={[0, 0, 4]} intensity={1} color="#ffffff" distance={8} decay={2} />

      <Suspense fallback={null}>
        {/* margin lowered from 1.2 → 1.0 so the doctor fills more of the frame */}
        <Bounds fit clip observe margin={1.0}>
          <DoctorModel />
        </Bounds>

        <Sparkles count={35} scale={4} size={1.5} speed={0.25} opacity={0.2} color="#8B5CF6" />
        <Sparkles count={20} scale={3.5} size={1} speed={0.2} opacity={0.15} color="#1FC7C0" />
      </Suspense>
    </Canvas>
  );
};

export default DoctorScene;