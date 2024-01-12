import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { CubeCamera, WebGLCubeRenderTarget, Scene, SRGBColorSpace, SphereGeometry, ShaderMaterial, DoubleSide, Mesh, BackSide } from 'three'
import CanvasLoader from '../Loader'
import { useRef } from 'react'
import textureVertex from './shader/texture/vertex.glsl'
import textureFragment from './shader/texture/fragment.glsl'
import vertexSun from './shader/sun/vertex.glsl'
import fragmentSun from './shader/sun/fragment.glsl'
import vertexAround from './shader/around/vertex.glsl'
import fragmentAround from './shader/around/fragment.glsl'




const Sun = () => {
  /* 如果使用了useThree需要指定除viewport之外的 因为useThree是响应式的钩子 重复渲染组件可能会导致纹理旋转被冻结 */

  const sunMatRef = useRef()

  const aroundRef = useRef()

  const cubeRenderTarget = new WebGLCubeRenderTarget(128, {
    colorSpace: SRGBColorSpace
  })
  const cubeCamera = new CubeCamera(0.1, 10, cubeRenderTarget)

  const scene = new Scene()

  const textureGeometry = new SphereGeometry(1, 30, 30)
  const shaderTextureMaterial = new ShaderMaterial({
    vertexShader: textureVertex,
    fragmentShader: textureFragment,
    side: DoubleSide,
    uniforms: {
      uTime: { value: 0 },
    },
  })
  const mesh = new Mesh(textureGeometry, shaderTextureMaterial)
  scene.add(mesh)

  useFrame((state, delta) => {
    cubeCamera.update(state.gl, scene)
    shaderTextureMaterial.uniforms.uTime.value += delta
    sunMatRef.current.uniforms.uPerlin.value = cubeRenderTarget.texture
    sunMatRef.current.uniforms.uTime.value += delta
    aroundRef.current.lookAt(state.camera.position)

  })


  return (
    // <primitive
    //   object={earth.scene}
    //   scale={2.5}
    //   position-y={0}
    //   rotation-y={0}
    // />
    <>
      <mesh scale={2} >
        <sphereGeometry args={[1, 32, 32]} />
        <shaderMaterial
          ref={sunMatRef}
          vertexShader={vertexSun}
          fragmentShader={fragmentSun}
          uniforms={{
            uTime: { value: 0 },
            uPerlin: { value: null }
          }}
        />
      </mesh>
      <mesh scale={2} ref={aroundRef} >
        <sphereGeometry args={[1.05, 30, 30]} />
        <shaderMaterial
          side={BackSide}
          vertexShader={vertexAround}
          fragmentShader={fragmentAround}
        />
      </mesh>
    </>
  )
}



const EarthCanvas = () => {
  return (
    <Canvas
      frameloop={"demand"}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6.5]

      }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.1}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={null}>
        <Sun />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas