"use client";

import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { useMotionValue, useSpring } from 'framer-motion';
import { Robot } from './robot/robot';

interface RobotSceneProps {
  isPowered?: boolean;
}

export function RobotScene({ isPowered = false }: RobotSceneProps) {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#C4B5FD" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          castShadow
        />
        <Robot mouseX={smoothMouseX} mouseY={smoothMouseY} isPowered={isPowered} />
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.5}
          scale={10}
          blur={2}
          far={4}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}