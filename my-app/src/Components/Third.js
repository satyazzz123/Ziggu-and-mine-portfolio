import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import bg from '../Images/bg.jpg';
import py from '../Images/pyramid.png';
import ni from '../Images/night.jpg'
export default function Third() {
  return (
    <div>
       <Parallax pages={3} >
      <ParallaxLayer offset={0} style={{backgroundImage:`url(${bg})`,backgroundSize:"cover",height:"40rem"}} >
       <ParallaxLayer offset={0.3} speed={-0.5}>
            <div style={{position:"absolute", left:"20rem",fontSize:"2.5rem"}} className="name">Satyajit Behera's Portfolio</div>
       </ParallaxLayer>
       <ParallaxLayer offset={0.1} speed={+0.3}>
            <div style={{position:"absolute", left:"-2rem"}} className="py">
                <img src={py} alt="" />
            </div>
       </ParallaxLayer>
       <ParallaxLayer offset={0.1} speed={+0.3}>
            <div style={{position:"absolute", left:"5rem"}} className="py">
                <img src={py} alt="" />
            </div>
       </ParallaxLayer> 
       <ParallaxLayer offset={0} speed={+0.3}>
            <div style={{position:"absolute", left:"0rem"}} className="py">
                <img src={py} alt="" />
            </div>
       </ParallaxLayer>
       <ParallaxLayer horizontal={true} offset={0.8} speed={-3}>
            <div style={{position:"absolute", left:"0rem"}} className="py">
                <img src={py} alt="" />
            </div>
       </ParallaxLayer>
       
       
      </ParallaxLayer>
      <ParallaxLayer offset={0.9} style={{backgroundImage:`url(${bg})`}}>
        <p>Layers can contain anything</p>
      </ParallaxLayer>
      <ParallaxLayer offset={2}>
        <p>Layers can contain anything</p>
      </ParallaxLayer>

   

   
    </Parallax>
    </div>
  )
}
