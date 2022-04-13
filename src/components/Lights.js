import React from 'react'

export const Lights = () => {
  return (
      <>
      <ambientLight color={"#EAD13E"} intensity={0.2} />

      <directionalLight position={[0,0,0]}/>
      
      </>
  )
}
