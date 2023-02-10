import React,{useEffect,useState} from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import HorizontalScroll from 'react-scroll-horizontal'
 

export default function Para2() {

    const child   = { width: `30em`, height: `100%`}
  return (
  
    <div >
      <Parallax pages={2} horizontal={true}>
      <ParallaxLayer>
        <div  style={{background:"blue",height:"800px",width:"100%"}} className="blue">
          blue
        </div>
      </ParallaxLayer>
      <ParallaxLayer horizontal={true}>
      <ParallaxLayer>
        <div style={{background:"yellow",height:"800px",width:"100%"}} className="blue">yelllow</div>
      
        </ParallaxLayer>
        <ParallaxLayer>
        <div style={{background:"red",height:"800px",width:"100%"}} className="red">red</div>
      
        </ParallaxLayer>
        <ParallaxLayer>
        <div style={{background:"green",height:"800px",width:"100%"}} className="blue">
          green
        </div>
      
        </ParallaxLayer>


        </ParallaxLayer>
        

      </Parallax>
      
    </div>
  )
}
