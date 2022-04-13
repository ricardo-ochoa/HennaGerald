import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./hennita.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base_metal.geometry}
        material={materials["base de metal"]}
        position={[-1.995, 0.219, -0.099]}
        scale={[0.818, 0.101, 0.818]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tostado.geometry}
        material={materials.prueba_tono}
        position={[-1.995, 0.231, -0.099]}
        scale={[0.794, 0.098, 0.794]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.choco.geometry}
        material={materials["Material.017"]}
        position={[0.014, 0.231, -0.099]}
        scale={[0.794, 0.098, 0.794]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cacao.geometry}
        material={materials["Material.018"]}
        position={[2.043, 0.231, -0.099]}
        scale={[0.792, 0.098, 0.792]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base.geometry}
        material={materials["Material.004"]}
        position={[0.063, 0.194, -0.083]}
        scale={[3.267, 0.17, 2.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["base-tapa"].geometry}
        material={materials.Material}
        position={[0.063, -0.001, 0]}
        scale={[3.5, -0.018, 2.208]}
      />
    </group>
  );
}

useGLTF.preload("./hennita.gltf");