import React from 'react';
import questionMark from '../images/questionMark.png';

function About() {
  return (
    <div>
       <div id="aboutDiv">
   <img src={questionMark} alt="question mark" id="questionMarkImg"/>
   
   <p id="aboutText">Here at Inquisitive Programming I prioritize understanding concepts and background of what I am typing when I program. I value understanding what I implement into my projects. During the process of creating my programs I make sure to ask any and all questions I need to in order to understand my goal and/or problem. I find that the more questions I ask, the better my end product is.I am a college student currently enrolled at Aiken Technical College. I am nearing the end of my last semester to getting my 'Major In Computer Technology Programming Emphasis'. Last but not least welcome to my programming portfolio!</p>          
   </div>
    </div>
  );
}

export default About;
