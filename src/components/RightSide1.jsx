import React from 'react';
import image8 from './images/image8.png'

function RightSide1() {
  return (
    <div className="img-container">
        <img
          src= {image8}
          loading="lazy"
          alt="Squad Icon"
          
          style={{ marginRight: '16px' }}
        />

      <div className="hover-text1">Squad Join</div>
      <div className="hover-text2">Mary Jane</div>
      <div className="hover-text3">420</div>

    </div>
  );
}

export default RightSide1;
