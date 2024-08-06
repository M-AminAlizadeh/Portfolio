import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { TextureLoader } from 'three'

const ThreeScene: React.FC = () => {
  const modelRef = useRef<THREE.Group>(new THREE.Group())

  useEffect(() => {
    const loader = new FBXLoader()
    const textureLoader = new TextureLoader()

    // Load textures
    const textures = [
      textureLoader.load('/public/models/pc/textures/BakedPCBody.png'),
      textureLoader.load('/public/models/pc/textures/BakedCabinet.png'),
      textureLoader.load('/public/models/pc/textures/BakedTable.png'),
      textureLoader.load('/public/models/pc/textures/BakedMouseKeyboard.png'),
      // textureLoader.load('/public/models/pc/textures/BakedScreen.png'),
    ]

    loader.load(
      '/models/pc/source/PC.fbx',
      (object: object) => {
        let textureIndex = 0
        object.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh
            const material = mesh.material as THREE.Material
            console.log(`Material name: ${material.name}`)
            mesh.material = new THREE.MeshStandardMaterial({
              map: textures[textureIndex % textures.length],
            })
            textureIndex++
          }
        })

        object.scale.set(0.1, 0.1, 0.1)
        object.position.set(10, 10, 0)
        if (modelRef.current) {
          modelRef.current.add(object)
        }
      },
      undefined,
      (error: string) => {
        console.error('Error loading model:', error)
      }
    )
  }, [])

  return (
    <div className="h-screen">
      <Canvas camera={{ position: [10, 80, 50] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <group ref={modelRef}></group>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default ThreeScene
