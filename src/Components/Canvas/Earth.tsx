import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls,useGLTF } from "@react-three/drei"
import { CanvasLoader } from "../CanvasLoader"

 const Earth = () => {
    const earth = useGLTF("/planet/scene.gltf")

  return (
    <primitive object={earth.scene}
      scale={2}
      position-y={0}
      rotation-y={0}
    />
  )
}



export const EarthCanvas = () => {
  return (
    <Canvas
    shadows frameloop="demand" gl={{preserveDrawingBuffer:true}}
    camera={{}}
    >
        <Suspense fallback={<CanvasLoader/>}>
           <OrbitControls
             autoRotate
             enableZoom={false}
             maxPolarAngle={Math.PI /2} 
             minPolarAngle={Math.PI /2}
           />
           <Earth/>
        </Suspense>

    </Canvas>
  )
}
