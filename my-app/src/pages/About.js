import React from 'react';
import questionMark from '../images/questionMark.png';
import "./styles/About.css"

function About() {
  return (
     
<div id="aboutDiv">
   <img src={questionMark} alt="question mark" id="questionMarkImg"/>
   <div id="aboutText">
   <li>
    Welcome to Inquisitive Programming! I am Aden and this is my portfolio website!
   </li>
   <li>
    I am a programmer that has worked on Apps, Databases, and Websites. I am familiar with HTML, CSS, JS, REACT, C++, C#, VB, PHP, NGINX, LINODE, PYTHON, and JAVA
   </li>
    <li>
    Graduated from Aiken Technical College with an 'Associate in Applied Science Major in Computer Technology Emphasis in Programming'
    </li>
    </div>          
</div>
    
  );
}

export default About;
