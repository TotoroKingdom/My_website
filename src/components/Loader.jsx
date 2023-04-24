import { Html,useProgress } from "@react-three/drei"



const Loader = () => {
  const {progress} = useProgress()
  return (
   <Html center >
      <span className="canvas-load whitespace-nowrap text-[16px] ">Loading : </span>
      <p style={{
        fontSize:14,
        color:'#f1f1f1',
        fontWeight:800,
        display:"inline-block"
      }}>{progress.toFixed(2)}</p>
   </Html>
  )
}

export default Loader