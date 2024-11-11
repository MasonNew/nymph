"use client";

import { useRef } from 'react';
import { Mesh } from 'three';

interface RobotBodyProps {
  isPowered?: boolean;
}

export function RobotBody({ isPowered = false }: RobotBodyProps) {
  const bodyRef = useRef<Mesh>(null);

  return (
    <group>
      {/* Main Body - Torso */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 4, 2]} />
        <meshStandardMaterial
          color="#7C3AED"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* Chest Plates */}
      <group position={[0, 0.8, 1]}>
        {/* Left */}
        <mesh position={[-0.8, 0, 0]}>
          <sphereGeometry args={[0.6, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
          <meshStandardMaterial
            color="#FF69B4"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1.5}
          />
        </mesh>
        <mesh position={[-0.8, 0, 0.1]}>
          <torusGeometry args={[0.4, 0.05, 16, 32]} />
          <meshStandardMaterial
            color="#FF1493"
            emissive="#FF1493"
            emissiveIntensity={isPowered ? 1 : 0.5}
            metalness={1}
            roughness={0}
          />
        </mesh>

        {/* Right */}
        <mesh position={[0.8, 0, 0]}>
          <sphereGeometry args={[0.6, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
          <meshStandardMaterial
            color="#FF69B4"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1.5}
          />
        </mesh>
        <mesh position={[0.8, 0, 0.1]}>
          <torusGeometry args={[0.4, 0.05, 16, 32]} />
          <meshStandardMaterial
            color="#FF1493"
            emissive="#FF1493"
            emissiveIntensity={isPowered ? 1 : 0.5}
            metalness={1}
            roughness={0}
          />
        </mesh>
      </group>

      {/* Clothing - Jacket */}
      <mesh position={[0, 0.2, 1.02]}>
        <boxGeometry args={[3.2, 3.8, 0.2]} />
        <meshStandardMaterial
          color="#4C1D95"
          metalness={0.3}
          roughness={0.7}
          envMapIntensity={0.8}
        />
      </mesh>

      {/* Holographic Shield */}
      <mesh position={[0, 0, 1.15]}>
        <planeGeometry args={[3.4, 4.2]} />
        <meshStandardMaterial
          color="#FF69B4"
          metalness={1}
          roughness={0}
          transparent={true}
          opacity={0.1}
          envMapIntensity={2}
        />
      </mesh>

      {/* Energy Belt */}
      <mesh position={[0, -1.5, 1.1]}>
        <boxGeometry args={[3.3, 0.3, 0.1]} />
        <meshStandardMaterial
          color="#FF1493"
          metalness={0.9}
          roughness={0.1}
          emissive="#FF1493"
          emissiveIntensity={isPowered ? 1 : 0.5}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Core Light */}
      <mesh position={[0, 0, 1.2]}>
        <circleGeometry args={[0.5, 32]} />
        <meshStandardMaterial
          color="#FF69B4"
          emissive="#FF69B4"
          emissiveIntensity={isPowered ? 1 : 0.8}
        />
      </mesh>

      {/* Power Conduits */}
      <mesh position={[0, 0, 1.1]}>
        <torusGeometry args={[0.7, 0.05, 16, 32]} />
        <meshStandardMaterial
          color="#FF69B4"
          emissive="#FF69B4"
          emissiveIntensity={isPowered ? 0.6 : 0.3}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Shoulder Pads with Energy Trim */}
      <mesh position={[-1.6, 1.5, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial
          color="#6D28D9"
          metalness={0.7}
          roughness={0.3}
          envMapIntensity={1}
        />
      </mesh>
      <mesh position={[-1.6, 1.5, 0.2]}>
        <torusGeometry args={[0.3, 0.03, 16, 32]} />
        <meshStandardMaterial
          color="#FF69B4"
          emissive="#FF69B4"
          emissiveIntensity={isPowered ? 1 : 0.5}
          metalness={1}
          roughness={0}
        />
      </mesh>
      <mesh position={[1.6, 1.5, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial
          color="#6D28D9"
          metalness={0.7}
          roughness={0.3}
          envMapIntensity={1}
        />
      </mesh>
      <mesh position={[1.6, 1.5, 0.2]}>
        <torusGeometry args={[0.3, 0.03, 16, 32]} />
        <meshStandardMaterial
          color="#FF69B4"
          emissive="#FF69B4"
          emissiveIntensity={isPowered ? 1 : 0.5}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Energy Lines */}
      <mesh position={[0, 0.5, 1.05]}>
        <boxGeometry args={[2, 0.1, 0.1]} />
        <meshStandardMaterial
          color="#FF69B4"
          metalness={0.9}
          roughness={0.1}
          emissive="#FF69B4"
          emissiveIntensity={isPowered ? 0.6 : 0.3}
        />
      </mesh>
      <mesh position={[0, 0, 1.05]}>
        <boxGeometry args={[2, 0.1, 0.1]} />
        <meshStandardMaterial
          color="#FF69B4"
          metalness={0.9}
          roughness={0.1}
          emissive="#FF69B4"
          emissiveIntensity={isPowered ? 0.6 : 0.3}
        />
      </mesh>

      {/* Side Armor Plates */}
      <mesh position={[-1.55, 0, 0]}>
        <boxGeometry args={[0.1, 3, 1.5]} />
        <meshStandardMaterial
          color="#5B21B6"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1.2}
        />
      </mesh>
      <mesh position={[1.55, 0, 0]}>
        <boxGeometry args={[0.1, 3, 1.5]} />
        <meshStandardMaterial
          color="#5B21B6"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1.2}
        />
      </mesh>
    </group>
  );
}