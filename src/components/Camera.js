import { PerspectiveCamera } from '@react-three/drei'


export const Camera = () => {
  return (
    <PerspectiveCamera
        makeDefault
        position={[-10,10,30]}
        fov={14}

    />
  )
}
