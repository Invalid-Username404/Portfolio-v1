import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Decal,Float,OrbitControls,Preload,useTexture } from "@react-three/drei"
import { CanvasLoader } from "../CanvasLoader"

type BallProps ={
    icon:string
}
 const Ball = ({icon}:BallProps) => {
    const [decal] = useTexture([icon])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25}/>
        <directionalLight position={[0,0,0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1,1]}/>
          <meshStandardMaterial
            color="#67e8f9"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
           />
           <Decal map={decal} position={[0,0,1]} rotation={[2 * Math.PI, 0, 6.25]} />
        </mesh>
    </Float>
  )
}


export const BallCanvas = ({icon}:BallProps) => {
  return (
    <Canvas
   
    
    
    gl={{preserveDrawingBuffer:true}}
   >
     <Suspense fallback={<CanvasLoader/>}>
       <OrbitControls
       enableZoom={false}
      
       />
       <Ball icon={icon} />
       

     </Suspense>
     <Preload all />
   </Canvas>
  )
}
