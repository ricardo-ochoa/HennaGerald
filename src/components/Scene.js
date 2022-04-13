import React from 'react'

import { Canvas } from '@react-three/fiber'

export const Scene = ({ children }) => {
  return (
        <Canvas> { children } </Canvas>
  )
}
