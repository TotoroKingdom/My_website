import * as THREE from 'three'
import { useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import { Points, PointMaterial, Preload } from '@react-three/drei'

import * as random from 'maath/random/dist/maath-random.esm'

import vertexShader from './shader/stars/vertex.glsl'
import fragmentShader from './shader/stars/fragment.glsl'



const Stars = (props) => {
  const ref = useRef()

  const materialRef = useRef()

  const count = 5000

  const sphere = random.inSphere(new Float32Array(count * 3), { radius: 1.2 })

  console.log(sphere)

  const color = new Float32Array(count * 3)



  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    //r
    color[i3] = Math.random()
    //g
    color[i3 + 1] = Math.random()
    //b
    color[i3 + 2] = Math.random()

  }


  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
    materialRef.current.uniforms.uTime.value += delta
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]} >
      <Points ref={ref}
        positions={sphere}
        stride={3}
        colors={color}
        frustumCulled
        {...props}
      >
        <shaderMaterial
          ref={materialRef}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uTime: { value: 0 }
          }}
        ></shaderMaterial>
      </Points>
    </group>
  )
}


const  StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0
    z-[-1]
    '>
      <Canvas
        camera={{ position: [0, 0, 1] }}
      >
        <Suspense fallback={null} >
          <Stars />
        </Suspense>
        <Preload />
      </Canvas>

    </div>
  )
}

export default StarsCanvas