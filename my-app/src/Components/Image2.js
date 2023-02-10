import React from 'react';
import { Parallax } from 'react-parallax';
import second from '../Images/img-2.jpg'

export default function Image2() {
  return (
    <div>
      <Parallax className='my_skills' blur={{ min: -15, max: 15 }} bgImage={second} strength={800}>
         <div className="skilssss">
            somethigdggdgg
         </div>
    </Parallax>
    </div>
  )
}
