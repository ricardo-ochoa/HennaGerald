import { Suspense } from 'react';
import './App.css';
import logo from "../src/logo.svg"

import { Scene } from './components/Scene';
import { Model } from './components/Model';

import { Color } from 'three';
import { Environment, OrbitControls, Stars } from '@react-three/drei';
import { ambientLight } from 'three';
import Minecraft from './components/Minecraft';
import { Camera } from './components/Camera';

import { Lights } from './components/Lights';
import { Gerald } from './components/Gerald';




function App() {
  return (
    <>
    <div className='main-container animate__animated animate__backInDown '>
      <img className="logo animate__animated animate__backInDown" src={logo}/>
      
      <div className='main-text'>
          <h1>Tu nuevo superpoder.</h1>
          <p className='subtitle'>Enamora al mundo con Gerald.</p>
        </div>

      <div className='main animate__animated animate__backInDown'>

        <Scene>
          <Camera />

          <Lights />

          <OrbitControls autoRotate target={[0,2,0]} enableZoom = {false}/>
          <color attach="background" args={['black']}/>

          <Suspense fallback={null}>
            <Minecraft/>
            
            <Environment files={"./hdr/christmas_photo_studio_05_2k.hdr"}/>
          </Suspense>

        </Scene>
      </div>

    </div>

    <Gerald />
    </>
  );
}

export default App;
