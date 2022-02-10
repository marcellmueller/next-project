import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Sphere,
  MeshReflectorMaterial,
} from '@react-three/drei';
import { Box, Particles } from '@/components/scenes';
import styles from './demo.module.css';
export default function BoxesPage() {
  const createScene = () => {
    let scene = [];

    const random = (range) => {
      return (
        Math.ceil(Math.random() * range) * (Math.round(Math.random()) ? 1 : -1)
      );
    };

    for (let i = 0; i < 70; i++) {
      const randomOne = random(10);
      const randomTwo = random(25);
      const randomThree = random(50);
      scene.push(<Box position={[randomOne, randomTwo, randomThree]} />);
    }

    // for (let i = 0; i < 10; i++) {
    //   for (let j = 0; j < 10; j++) {
    //     scene.push(<Box position={[i * 2, j * 2, 0]} />);
    //   }
    // }
    return scene;
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <h2 className={styles.title}>
        Hi, my name is Marcel Mueller. I like to build things.
      </h2>
      <Canvas style={{ height: 1000 }} camera={{ position: [20, 20, 35] }}>
        <fog attach="fog" args={['#17171b', 30, 40]} />
        <color attach="background" args={['#17171b']} />
        <ambientLight intensity={0.25} />
        <directionalLight
          castShadow
          intensity={2}
          position={[10, 6, 6]}
          shadow-mapSize={[1024, 1024]}
        >
          <orthographicCamera
            attach="shadow-camera"
            left={-20}
            right={20}
            top={20}
            bottom={-20}
          />
        </directionalLight>
        {createScene()}
        <Particles count={100} />
        <Sphere>
          <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={3.5}
            depthScale={1}
            minDepthThreshold={0.85}
            color="#505050"
            metalness={0.6}
            roughness={1}
          />
        </Sphere>
        <OrbitControls
          enablePan={true}
          minPolarAngle={4}
          maxPolarAngle={4}
          minDistance={0.5}
          maxDistance={5}
          enableZoom={true}
          autoRotate={true}
        />
      </Canvas>
    </div>
  );
}
