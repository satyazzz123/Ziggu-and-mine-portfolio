import React, { useEffect, useState } from 'react'
import wp from '../Images/bg-1.jpeg'

import { MdOutlineArchive } from 'react-icons/md';
import aos from 'aos';
import "aos/dist/aos.css"

export default function Parallax() {
    const[offsetY,setOffsetY]=useState(0);
    const handleoffsetY=()=>{
        setOffsetY(window.pageYOffset)
    }
    useEffect(()=>{
window.addEventListener('scroll',handleoffsetY)
        return ()=>window.removeEventListener('scroll',handleoffsetY);
       
    },[])
    useEffect(()=>{
      aos.init({duration:2000})
    },[])
  return (
    <div className='app'>
      <div className="portfolio">
        <div className="left" style={{transform:`translateX(-${offsetY*5.5}px)`}}>
          Satyajit
        </div>
        <div className="right" style={{transform:`translateX(${offsetY*5.5}px)`}}>
          Behera
        </div>
       
      </div>
     <div className="text">
     <div className="text-card-1" >
       <div className="text-card-head">
        <div className="part1">
          Satyajit Behera
        </div>
        <div className="part2">
        <div className='chat'>
          Chats
        </div>
        <div>
          Status
        </div>
        <div>
          Calls
        </div>
        </div>
       </div>
       <div className="text-card-body">
        <div className='archive'>
          <div style={{fontSize:"3.2rem",color:"grey",paddingLeft:"3rem"}}><MdOutlineArchive/></div>
          <div style={{position:"relative",right:"-4rem",top:"0rem",color:"white",fontSize:"2.2rem"}}>Archive</div>
        </div>
        <div className='client'>
        <img src={wp} alt="" style={{trasnform:"scale(0.5)",borderRadius:"55%", paddingLeft:"2rem"}}/>
        <div style={{color:"white",fontSize:"2.2rem",position:"relative",right:"-4rem",top:"1rem"}}>Client</div>

        </div>
       </div>
      </div>
      <div className="text-card-2" >
     <div style={{display:"flex" ,height:"8rem"}} className="contact_head">
      <img src={wp} alt="" style={{transform:"scale(0.5)",borderRadius:"50%"}} />
      <div style={{fontSize:"2.2rem",position:"relative", top:"2rem", color:"white"}} className="client_info">
        Client
      </div>
     </div>
     <div className="client_body">
      <div className="warn">Messages and calls are end-to-end encrypted.No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more</div>
      <div className="messages_wp"  data-aos="flip" id="mes-1">
        Hello!! can you tell me something about yourslef.And what are your specifications and your field of work.
      </div>
      <div className="messages_wp" data-aos="flip"  id="mes-2">
        Hello!! I am Satyajit Behera an undergrad pursuing a degree in IT branch. I am a web developer and I am a full stack developer and have experience in Blockchain.
      </div>
     </div>
      </div>
     </div>



    </div>
  )
}
