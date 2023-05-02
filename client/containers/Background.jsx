import React from "react";
import { motion } from "framer-motion";
import OceanSrc from "../../images/Ocean.png"
import LogoShield from "../../images/Logo_Shield.png"
import Rope from "../../images/Rope_Crop.png"
import Rainforest from "../../images/Rainforest.png"
import Navbar from "../components/Navbar";
import LogoMain from "../components/LogoMain";
import Ocean from "../components/Ocean";
import BlackElements from "../components/BlackElements";
import ENS from "../components/ENS";
import Phase2 from "../components/Phase2";
import FAQ from "../components/FAQ";
import Bottom from "../components/Bottom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// sticky={{start: 0, end: 3}
const Background = () => {

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <Parallax id="p-container" pages={7.5}>
      
      <ParallaxLayer offset={0} speed={1} sticky={{start: 0, end: 1.4}}
      style={{height: '100px', overflow: 'hidden'}}
      id='nav-container'>
          <Navbar></Navbar>
      </ParallaxLayer>

      <ParallaxLayer offset={.07} speed={-.6}
      style={{}}>
        <img src={LogoShield} style={{width: '4%'}}></img>
      </ParallaxLayer>

      <ParallaxLayer offset={.1} speed={-.4} 
      style={{}}>
        <LogoMain></LogoMain>
      </ParallaxLayer>

      <ParallaxLayer offset={.9} speed={0} factor={2}
      style={{backgroundImage: `url(${OceanSrc})`, backgroundSize: '100% 100%', overflow: 'hidden'}}
      id='ocean-container'>
        <Ocean></Ocean>
      </ParallaxLayer>

      <ParallaxLayer offset={2.9} speed={0} factor={2}
      style={{backgroundColor: 'black'}}>
        <BlackElements></BlackElements>
      </ParallaxLayer>
      
      <ParallaxLayer sticky={{start: 2.9, end:4.9}} speed={0} factor={2}
      style={{}}>
        <img src={Rope} style={{width: '100vw', top: '-15px', position: 'relative'}}></img>
      </ParallaxLayer>

      <ParallaxLayer sticky={{start: 4.9, end:4.9}} speed={0} 
      style={{}}>
        <img src={Rope} style={{width: '100vw', top: '-15px', position: 'relative'}}></img>
      </ParallaxLayer>

      <ParallaxLayer offset={4.9} speed={0} factor={1.3} 
      style={{backgroundImage: `url(${Rainforest})`, backgroundSize: '100% 100%'}}
      id='rainforest'>
        <ENS></ENS>
      </ParallaxLayer>
      
      <ParallaxLayer offset={6.2} speed={0}
      style={{backgroundColor: "black"}}
      id='bottom-black'>
        <Phase2></Phase2>
        <FAQ></FAQ>
      </ParallaxLayer>

      <ParallaxLayer offset={7.2} speed={0} factor={.3}
      style={{backgroundColor: "white"}}
      id='white'>
        <Bottom></Bottom>
      </ParallaxLayer>

    </Parallax>
    </motion.div>
  );
};

export default Background;