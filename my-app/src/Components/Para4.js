import React from 'react';
import { Parallax, Background } from 'react-parallax';

export default function Para4() {
  return (
    <div>
          <Parallax
        bgImage="/path/to/another/image"
        renderLayer={percentage => (
            <div
                style={{
                    position: 'absolute',
                    background: `rgba(255, 125, 0, ${percentage * 1})`,
                    left: '10%',
                    top: '20%',
                    width: percentage * 500,
                    height: percentage * 500,
                }}
            />
        )}
    >
        <p>... Content</p>
    </Parallax>
    <div style={{height:'1000px'}}>
        hggh
    </div>
    </div>
  )
}
