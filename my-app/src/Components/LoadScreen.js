import React, { useEffect, useState } from 'react';
import Animated_trans from './Animated_trans';

export default function LoadScreen() {
    const[show1,toShow1]=useState("block");
    const[show2,toShow2]=useState("block")
    const[show3,toShow3]=useState("block")
  useEffect(()=>{
        setTimeout(()=>{
            toShow1("none")
        },1200);
        setTimeout(()=>{
            toShow2("none")
        },1600);
        setTimeout(()=>{
            toShow3("none")
        },2000)
  },[])
  return (
    
     <Animated_trans>
     <div className="load_body">
        <span style={{padding:"0.20rem",display:`${show1}`}}>Satyajit </span> <span style={{padding:"0.20rem",display:`${show2}`}}>Behera's </span><span style={{padding:"0.20rem",display:`${show3}`}}> Portfolio</span>
      </div>
       </Animated_trans>
    
  )
}
