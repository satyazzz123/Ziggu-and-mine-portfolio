import React, { useState } from 'react'
import Animate from './Animate';
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function Home() {
  const[about,showabout]=useState("block");
  const[projects,showpro]=useState("none");
  const[contact,showcontact]=useState("none");
  const[skills,showskills]=useState("none")
  let show_pro=()=>{
    showabout("none");
    showpro("block");
    showcontact("none");
    showskills("none")
  }
  let show_co=()=>{
    showabout("none");
    showcontact("block");
    showpro("none");
    showskills("none")
  }
  let show_ski=()=>{
    showabout("none");
    showskills("block")
    showpro("none");
    showcontact("none")
  }
  return (
    <Animate>
    <div style={{display:"flex"}}>
      
        <div className="Home">
          <div className="overlay">
            <h1 style={{fontSize:"3.2rem",display:"inline-block"}}>Satyajit Behera</h1>
            <div onClick={show_pro} ><h2>Projects</h2></div>
          
            <div onClick={show_co} ><h2>Contact Me</h2></div>
            <div onClick={show_ski}><h2>Skills</h2></div>
          </div>
        </div>
        <div id='info' style={{border:"2px solid black", width:"55%",height:'66rem',display:"flex",flexDirection:"column"}}>
          <div className="about" style={{display:`${about}`}}>
            <p style={{fontSize:"3.2rem"}}>
              <h1>
                ABOUT ME
              </h1>
              I am Satyajit Behera an undergrad. I am a blockchain full-stack web-developer with skills in.. 
            </p>
           
          </div>
          <div className="contacts" style={{display:`${contact}`}}>
            conatct me here
          </div>
        <div className="pro" style={{display:`${projects}`}}>
          ijncjinjdkidjia

        </div>
          <div className="skills" style={{display:`${skills}`}}>
              <div>
                <img src="" alt="" />
              </div>
          </div>
        </div>
    
    </div>
    </Animate>
  )
}
