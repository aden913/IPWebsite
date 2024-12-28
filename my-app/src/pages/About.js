import React from 'react';

import headshot from '../images/headshot.jpg'

function About() {
  return (
     
<div className='AlignCenter'>
  <div className='flexDiv'>
<div className='left'>
<img src={headshot} alt="headshot of me" id="headshot"></img>
</div>
<div className='rght'>
   <div id="aboutText">
   <li className="ProjectText">
    Welcome to Inquisitive Programming! I am Aden and this is my portfolio website!
   </li>
   <li className="ProjectText">
    I am a programmer that has worked on Apps, Databases, and Websites. I am familiar with HTML, CSS, JS, REACT, C++, C#, VB, PHP, NGINX, LINODE, PYTHON, and JAVA
   </li>
    <li className="ProjectText">
    Graduated from Aiken Technical College with an 'Associate in Applied Science Major in Computer Technology Emphasis in Programming'
    </li>
    </div>        
</div>
</div>
</div>
    
  );
}

export default About;
