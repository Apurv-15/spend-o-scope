
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';

function Scene() {
  const ringRef = useRef();

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <mesh ref={ringRef}>
        <torusGeometry args={[2, 0.4, 16, 32]} />
        <meshBasicMaterial color="#9b87f5" />
      </mesh>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
      <Canvas
        flat
        camera={{
          position: [0, 0, 8],
          fov: 45
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
