import { useFrame } from '@react-three/fiber';

export const useIdleAnimation = (groupRef, rimIndigoRef, rimTealRef, armLRef, armRRef, headRef) => {
  const BASE_Y = -1.08;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle breathing bob
      groupRef.current.position.y = BASE_Y + Math.sin(t * 1.1) * 0.04;
      // Stay mostly front-facing — subtle sway only
      groupRef.current.rotation.y = Math.PI + Math.sin(t * 0.35) * 0.08;
    }

    if (headRef?.current) {
      headRef.current.rotation.y = Math.sin(t * 0.5) * 0.06;
      headRef.current.rotation.x = Math.sin(t * 0.7) * 0.03;
    }

    if (armLRef?.current) {
      armLRef.current.rotation.z = Math.sin(t * 1.0) * 0.025;
    }
    if (armRRef?.current) {
      armRRef.current.rotation.z = Math.sin(t * 1.0 + Math.PI) * 0.02;
    }

    if (rimIndigoRef?.current) {
      rimIndigoRef.current.intensity = 1.0 + Math.sin(t * 1.6) * 0.15;
    }
    if (rimTealRef?.current) {
      rimTealRef.current.intensity = 1.0 + Math.cos(t * 1.4) * 0.15;
    }
  });
};
