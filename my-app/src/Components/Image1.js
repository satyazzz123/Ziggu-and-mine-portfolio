import React from 'react';
import { Parallax } from 'react-parallax';
import first from "../Images/img-3.jpg";
import Image2 from './Image2';

export default function Image1() {
  return (
    <div>
       <Parallax className='image-1' bgImage={first} blur={{ min: -15, max: 15 }}  strength={800}>
       <div className="about_myslef">
        I am satyajit Behera
       </div>
    </Parallax>
    <Image2/>
    </div>
  )
}
