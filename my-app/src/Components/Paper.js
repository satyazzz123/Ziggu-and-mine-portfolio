import React,{useEffect,useState} from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Background } from 'react-parallax';
import phone from '../Images/phone.png';
import bro from '../Images/broom.png';
import paper from '../Images/paperball.png';
import win from '../Images/window.png';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsArrowUpRight } from 'react-icons/bs';
import cs from '../Images/css.png';
import ht from '../Images/html-5.png';
import js from '../Images/javascript.png';
import re from '../Images/react-native.png';
import no from '../Images/nodejs.png';
import ex from '../Images/express.png';
import mo from '../Images/mongodb.png';
import go from '../Images/golang.png';
import eth from '../Images/ethereum.png';
import sq from '../Images/mysql.png';
import dino from '../Images/dino.png';



export default function Paper() {
  
    
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer offset={0} style={{background:"#030000",color:"#F7F5F6"}}>
            <ParallaxLayer offset={0.2} >
               <img style={{transform:"scale(2) translateX(-10rem)"}} src={win} alt="" id='win' />

            </ParallaxLayer>
            <ParallaxLayer offset={0.2} speed={-0.5} >
                
                <span style={{position:"absolute",left:"55rem",fontSize:"2.5rem",perspective:"(20rem)",transform:"translateZ(50rem)", fontFamily:"eva"}}> 
                <h1 id='satya'>Satyajit Behera's Portfolio</h1>
                <h1 style={{display:"flex",justifyContent:"space-around"}} id="icon"> 
               <a   className='hover'  href="https://www.linkedin.com/in/satyajit-behera-0522411ba" target={"_blank"}> <BsLinkedin/></a>
                 <a  className='hover'  href="https://github.com/satyazzz123" target={"_blank"}> <BsGithub/>  </a>
                  <a  className='hover'  href="https://twitter.com/Satyaji39445063?t=mEwreeQoAqzmbjhF3uUZSw&s=08" target={"_blank"}><BsTwitter/> </a> 
                  </h1>
                
                 </span>

            </ParallaxLayer>

        </ParallaxLayer>
        <ParallaxLayer offset={1} style={{background:"#BBC4C2"}}>
        
                <ParallaxLayer horizontal={true}  offset={0} speed={-0.7} style={{zIndex:"5"}}>
                <img style={{transform:"scale(0.45)",position:"relative",top:"20rem",zIndex:"5"}} src={paper} alt="" id="a" />
                </ParallaxLayer>
                <ParallaxLayer horizontal={true}  offset={0.5} speed={+0.3} style={{zIndex:"5"}}>
                <img style={{transform:"scale(0.25)",position:"relative",top:"22rem",zIndex:"5"}} src={paper} alt="" id="b" />
                </ParallaxLayer>
                <ParallaxLayer horizontal={true}  offset={0.1} speed={-1.5} style={{zIndex:"5"}}>
                <img style={{transform:"scale(0.3)",position:"relative",top:"21rem",zIndex:"5"}} src={paper} alt="" id="c" />
                </ParallaxLayer>
                <ParallaxLayer horizontal={true}  offset={0.6} speed={-1} style={{zIndex:"5"}}>
                <img style={{transform:"scale(0.3)",position:"relative",top:"10rem",zIndex:"5"}} src={paper} alt="" id="d" />
                </ParallaxLayer>
                <ParallaxLayer horizontal={true}  offset={0.2} speed={-0.9} style={{zIndex:"5"}}>
                <img style={{transform:"scale(0.5)",position:"relative",top:"9rem",zIndex:"5"}} src={paper} alt="" id="e" />
                </ParallaxLayer>
              
              
              
              
              
              
              
              
              
              
              
              
              
                <ParallaxLayer offset={0.5} style={{zIndex:"1"}}>
                    <h1  style={{display:"flex",justifyContent:"center",zIndex:"1",fontSize:"2.8rem",fontWeight:"900",fontFamily:"eva"}}>About Me</h1>
                    <p id='about_me' style={{width:"50%",fontSize:"2.2rem", display:"flex",padding:"0rem 35rem",zIndex:"1"}}>
                    I am an undergrad in It and a full stack webdeveloper and have experience in blockchain.I have completed multiple projects in web Dev and done some freelance work with good client satisfaction
                    </p>
                </ParallaxLayer>

            
        </ParallaxLayer>
       
       
       
       
       
        <ParallaxLayer offset={2} style={{background:"#DFC970",color:"white"}}>
            
        <ParallaxLayer offset={0.1} style={{}} speed={-0.045}>
            <h1 style={{display:"flex",justifyContent:"center",fontSize:"2.5rem",fontFamily:"eva", fontWeight:"900"}}>
                Technology I am familiar with
            </h1>

        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.1}>
        <div className='grid' style={{zIndex:"10"}}>
                    <img className='size' style={{zIndex:"2"}}  src={ht} alt="" />
                    <img className='size' style={{zIndex:"2"}}  src={cs} alt="" />
                    <img className='size' src={js} alt="" />
                    <img className='size' src={re} alt="" />
                    <img className='size' src={no} alt="" />
                    <img className='size' src={ex} alt="" />
                    <img className='size' src={mo} alt="" />
                    <img className='size' src={go} alt="" />
                    <img className='size' src={eth} alt="" />
                    <img className='size' src={sq} alt="" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer horizontal={true} speed={-0.6}>
         <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">   <img src={dino} alt="" style={{zIndex:"1",transform:`scale(0.2)`,position:"relative",bottom:"-28rem"}} /></a>
            </ParallaxLayer>
      


        </ParallaxLayer>
        <ParallaxLayer offset={3} style={{background:"#0D3530"}}>
           <ParallaxLayer offset={0.5} style={{color:"#F7F5F6",fontFamily:"eva",fontSize:"4rem",marginLeft:"2rem"}} speed={0.02}>
            My Projects
           </ParallaxLayer>
            <ParallaxLayer offset={0} style={{color:"white"}}>
            <div style={{position:"relative",right:"-80rem"}} className="prop">
                <div style={{width:"35%",fontSize:"2.2rem"}}>
                      <a className='hover' href="https://github.com/satyazzz123/Ziggu-and-mine-travelling-website"  target={"_blank"} style={{color:"white",textDecoration:"none"}}>  <h1>Zeil's <BsArrowUpRight/> </h1></a>
                        <p>
                            A travelling website where you can find about different beaches around the year, locations and a gallery for viewing all images and restaurant.
                        </p>
                </div>
                <div style={{width:"35%",fontSize:"2.2rem"}}>
                    <a className='hover' href="https://github.com/satyazzz123/Translating-website"  target={"_blank"} style={{color:"white",textDecoration:"none",}}>    <h1>Multilingual Translator  <BsArrowUpRight /> </h1> </a>
                        <p>
                            A website which helps you to translate from one language to another and also has text to speech and speech to text functionality
                        </p>
                </div>
                <div style={{width:"35%",fontSize:"2.2rem"}}>
                      <a className='hover' href="https://github.com/satyazzz123/Ziggu-and-my-extension" target={"_blank"} style={{color:"white",textDecoration:"none"}}>  <h1>Chrome Extension  <BsArrowUpRight/> </h1></a>
                        
                        <p>
                          A chrome extensionto make sorting tasks easy
                        </p>
                </div>
            </div>
        </ParallaxLayer>
        </ParallaxLayer>
       

      </Parallax>
    </div>
  )
}
