import React,{useEffect,useState} from 'react'
import cs from '../Images/css.png';
import ht from '../Images/html-5.png';
import js from '../Images/javascript.png';
import re from '../Images/react-native.png';
import no from '../Images/nodejs.png';
import ex from '../Images/express.png';
import mo from '../Images/mongodb.png';
import go from '../Images/golang.png';


import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import HorizontalScroll from 'react-scroll-horizontal'

export default function Final() {
  return (
    <div style={{width:"100vw",height:"100vh"}} className="main font">
       <HorizontalScroll reverseScroll={true }>
        
       <div style={{width:"100vw", height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",transform:`trans`}} className='bg0' > 
       <p style={{position:"absolute", top:"2rem"}}>
       <div className="bg1">
   <h1 >I am satyajit Behera, an undergrad, I am a  full stack webdeveloper and have exxperience in blockchain</h1> 
    </div>
    </p> 
   <p style={{position:"absolute", top:"0rem", left:"100rem"}}>
   <div className="bg5">
       <h1>I am pursuing a degree in information Technology and have completed multiple projects in web Dev and done some freelance work with good client satisfaction</h1> 
    </div>
   </p>
    
        </div>
       <div style={{width:"100vw", height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",transform:`trans`}} className='skills' >
        <p style={{position:"absolute", top:"3rem",height:"45rem",width:"45rem"}} > 
            <div className="skills_2">
                
                <div><h1>My skills</h1></div>
                <div style={{boxSizing:"border-box",overflow:"auto"}}>
                    <img className='size' src={ht} alt="" />
                    <img className='size' src={cs} alt="" />
                    <img className='size' src={js} alt="" />
                    <img className='size' src={re} alt="" />
                    <img className='size' src={no} alt="" />
                    <img className='size invert' src={ex} alt="" />
                    <img className='size' src={mo} alt="" />
                    <img className='size' src={go} alt="" />
                </div>
                
            </div>
        
        
        </p></div>
       <div style={{width:"100vw", height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",transform:`trans`}} className='projects-2' > 
        
        
        <p style={{position:"absolute", top:"-1rem",left:"330rem"}}>
        <div className="pro_1">project1</div>
        </p>
       <p style={{position:"absolute", top:"-1rem",left:"380rem"}}>
       <div className="pro_2" >pro2</div>
       </p>
       <p  style={{position:"absolute", top:"-1rem",left:"430rem"}}>
       <div className="pro_3" >pro3</div>
       </p>
        
        </div>
       <div style={{width:"100vw", height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",transform:`trans`}} className='contact2' >

        <p>
         <div className="con">
       <a style={{fontSize:"3rem", color:"bisque", textDecoration:"none"}}target="_blank"  href="https://github.com/satyazzz123"> < BsGithub/> Check my github</a>

       <a style={{fontSize:"3rem", color:"bisque", textDecoration:"none"}}target="_blank"  href="https://mail.google.com/mail/"><MdOutlineMarkEmailUnread/> beherasatyajit715@gmail.com </a>
       
       <a style={{fontSize:"3rem", color:"bisque", textDecoration:"none"}}target="_blank"  href="https://mail.google.com/mail/"><BsLinkedin/> My Linkedin </a>
         </div>
        </p>
       </div>
        </HorizontalScroll>
    </div>
  )
}
