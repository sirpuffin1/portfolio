import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min"
import 'animate.css';
import Intro from '../components/Intro';

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xffffff,
  midtoneColor: 0x4f9ade,
  lowlightColor: 0x5d98f7,
  blurFactor: 0.52,
  speed: 1.40,
  zoom: 2.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);


  return (
    <div className="bg-blue-300" ref={vantaRef}>
      <Head>
        <title>Angel Cruz</title>
        <meta name="description" content="Angel's Wonderful Portfolio" />
        <link rel="icon" href="/cloudy.png" />
      </Head>

      <main >
      <Intro></Intro>
      </main>
      
    </div>
  )
}
