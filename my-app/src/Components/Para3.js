import React,{useEffect,useState} from 'react'

import HorizontalScroll from 'react-scroll-horizontal'
import { Parallax, Background } from 'react-parallax';

export default function Para3() {
    const[offsetY,setOffsetY]=useState(0);
    const handleoffsetY=()=>{
        setOffsetY(window.pageYOffset)
    }
    useEffect(()=>{
window.addEventListener('scroll',handleoffsetY)
        return ()=>window.removeEventListener('scroll',handleoffsetY); },[])
  return (
         
         
               <p style={{dipslay:"flex",width:"100%",border:`2px solid black`,position:"absolute",top:"100px"}}>
                 <div className='div'>
                hello
       
    </div>
             </p>

     
         
    
  )
}
