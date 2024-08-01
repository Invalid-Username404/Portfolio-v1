import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Preload, OrbitControls, Center } from "@react-three/drei";
import { CanvasLoader } from "../CanvasLoader";

type LaptopProps = {
  isMobile: boolean;
};

export const Laptop = ({ isMobile }: LaptopProps) => {
  const LaptopModel = useGLTF("/Laptop/scene.gltf");
  const scale = isMobile ? 0.8 : 1;
  const position = isMobile ? [-2, -3.5, 1] : [-2, -4, 1.6];

  return (
    <Center>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />

      <primitive
        object={LaptopModel.scene}
        scale={scale}
        position={position}
        rotation={[0, 3, 0]}
      />
    </Center>
  );
};

export const LaptopCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Laptop isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
