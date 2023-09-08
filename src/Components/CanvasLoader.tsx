import { Html,useProgress } from "@react-three/drei"

export const CanvasLoader = () => {
  const {progress} = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className=" text-[14px] absolute top-[75px]  right-[65px]  text-[#3799da] font-[800]"
      
      >
       Loading {progress.toFixed(2)}%
      </p>
    </Html>
  )
}
