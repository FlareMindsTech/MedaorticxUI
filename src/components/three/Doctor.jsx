import React, { useRef, useEffect, useMemo } from 'react';
import { useGLTF, useAnimations, Center, Resize, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export const Doctor = ({ rimIndigoRef, rimTealRef }) => {
  const groupRef = useRef();
  const { scene, animations } = useGLTF('/doctor_-_sketchfab_weekly_-_13_mar23.glb');
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstActionName = Object.keys(actions)[0];
      actions[firstActionName]?.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.35) * 0.3;
    }

    if (rimIndigoRef?.current) {
      rimIndigoRef.current.intensity = 1.2 + Math.sin(t * 1.6) * 0.2;
    }
    if (rimTealRef?.current) {
      rimTealRef.current.intensity = 1.2 + Math.cos(t * 1.4) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Center bottom>
          <Resize scale={3.0}>
            <primitive object={clonedScene} />
          </Resize>
        </Center>
      </Float>
    </group>
  );
};

useGLTF.preload('/doctor_-_sketchfab_weekly_-_13_mar23.glb');


