import logo from './images/logo250.png';
import questionMark from './images/questionMark.png';
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


import amazingVideo from './images/amazingRacerVideo.mp4';
import chaosVideo from './images/chaosVideo.mp4';
import perilousVideo from './images/perilousVideo.mp4';
import captainVideo from './images/captainVideo.mp4';
import gauntletVideo from './images/gauntletVideo.mp4';
import safariVideo from './images/safariVideo.mp4';
import schoolVideo from './images/schoolVideo.mp4';

import webpageScreenshot from './images/webpageScreenshot.PNG';
import phpProjectScreenshot from './images/phpProjectScreenshot.PNG';
import visualBasicScreenshot from './images/visualBasicScreenshot.PNG';




import './images/TTChocolates-Regular.otf';
import './App.css';



function App() {
  
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
  
    await fetch("https://inquisitiveprogramming.com/api/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({ name: "", position: "", level: "" });
 
  }

  return (
    <div className="App">
          <header id="logo"><img src={logo} alt="Logo"/></header>
          <nav>
          <ul id="navbar">
          <li> <a href="#aboutDiv">About</a></li>
          <li><a href="#cSharpDiv">C#</a></li>
          <li><a href="#cPlusPlusDiv">C++</a></li>
          <li><a href="#htmlDiv">HTML</a></li>
          <li><a href="#phpDiv">PHP</a></li>
          <li><a href="#vbDiv">VB</a></li>
          <li><a href="#contactDiv">Contact</a></li>
          </ul>
          </nav>
          <div id="aboutDiv">
          <img src={questionMark} alt="question mark" id="questionMarkImg"/>
          
          <p id="aboutText">Here at Inquisitive Programming I prioritize understanding concepts and background of what I am typing when I program. I value understanding what I implement into my projects. During the process of creating my programs I make sure to ask any and all questions I need to in order to understand my goal and/or problem. I find that the more questions I ask, the better my end product is.I am a college student currently enrolled at Aiken Technical College. I am nearing the end of my last semester to getting my 'Major In Computer Technology Programming Emphasis'. Last but not least welcome to my programming portfolio!</p>          
          </div>

          <div id="cSharpDiv">               
            <div id="cSharpProjectDiv">             
          <li className="cSharpProjectNames">The Amazing Racer</li>
          <p className="cSharpProjectText">My first C# project. The goal of this project was to experiment with a little scripting as well as other Unity game design objects. I managed to create a simple game where you collect trophies to finish the game with a time that is recorded in the end.</p>
          <video className="videos"  autoPlay loop muted><source src={amazingVideo}></source></video>         
          <li className="cSharpProjectNames">Chaos ball</li>
          <p className="cSharpProjectText">My second ever c# project. This project had more scripting involved than the first. The goal of this game was to guide several colored balls into their accordingly matching goals. There are several uncolored balls meant to create chaos by knocking around other balls at high speeds. I managed to take creative authority and made a creative asthetic enviornment.</p>
          <video className="videos"  autoPlay loop muted><source src={chaosVideo}></source></video>
          <li className="cSharpProjectNames">Perilous Descent</li>
          <p className="cSharpProjectText">This was the midterm project for my c# class. This was the first project that we had open reign on whatever we wanted to create. I created a game where the objected is to get to the end of a hallway after descending past the lobby. Starting the game you begin very slow and cumbersome, barely able to avoid the obstacles. Once you die you recieve a 'death coin'. In the lobby if you have enough death coins you can purchase a couple upgrades which include the ability to jump and movement speed. This project was heavy on c# scripting and game design.</p>
          <video className="videos"  autoPlay loop muted><source src={perilousVideo}></source></video>
          <li className="cSharpProjectNames">Captain Blaster</li>
          <p className="cSharpProjectText">This was my first project being 2D. The game is a simple shoot em up scrolling space shooter. The scripting for a 2D game was definetily different but not as challenging. I did something unique from my classmates as I added a percentage instead of a simple score tracker that at 100% summons a boss at the end you must defeat. Getting to the boss at the beginning of the game will be no use however as you are not powerful enough. I have a main menu where you can choose 3 different weapons to use in game as well as an interface where you can upgrade the weapons with currency you gain in-game.</p>
          <video className="videos"  autoPlay loop muted><source src={captainVideo}></source></video>
          <li className="cSharpProjectNames">Gauntlet Runner</li>
          <p className="cSharpProjectText">A simple game where you run along a set path as far as you can. I added a projectile you can shoot to destroy obstacles in your path as well as changed the assets provided to give a cleaner and more appealing look.</p>
          <video className="videos"  autoPlay loop muted><source src={gauntletVideo}></source></video>
          <li className="cSharpProjectNames">Safari</li> 
          <p className="cSharpProjectText">Being my final project for my c# class I took my time to create a game that stretched my range of scipting. I delved into creating rays, AI, and using Time in my scripts. This game is simple yet addicting. You start out with low stats and a timer which when counts to 0 returns you to a shack. In the shack you can purchase upgrades such as: health, speed, time. You can also purchase upgrades for your weapon: damage, relaod speed, firerate, and magazine size. The objective of the game is to finish a series of bounties that require you to cull the nearby animals that get increasingly harder to accomplish. The scripting for this game was intense and I learned quite a bit while being completely entertained.</p>   
          <video className="videos"  autoPlay loop muted><source src={safariVideo}></source></video>
          </div>      
          </div>

          <div id="cPlusPlusDiv">
          <li className="cSharpProjectNames">School Escape</li>
          <p className="cSharpProjectText">School Escape was made entirely in C++. This is a text based adventure where you are stuck in a school with a monster, and you must find your way out. The techniques I used to create this game are pretty advanced. The c++ concepts used here include link-lists, pointers, simple ai, classes, and minor windows manipulation. I really like the class system I implemented the most. At the start of the game you can choose one of three characters to play as. Each have diffferent items to aid them on their escape. It took several months to code and create, alot of passion went into it and I am overall very satisfied with how it turned out.</p>
          <video className="videos"  autoPlay loop muted><source src={schoolVideo}></source></video>
          </div>

          <div id="htmlDiv">
            <li className="cSharpProjectNames">My Websites</li>
             <a href="webpages/html/CoxCh5/index.html" className='webLinks'>First Webpage</a>
             <a href="webpages/html/CoxCh6/index.html" className='webLinks'>Second Webpage</a>
             <a href="webpages/html/CoxCh7/index.html" className='webLinks'>Third Webpage</a>
             <a href="webpages/html/CoxCh13/index.html" className='webLinks'>Fourth Webpage</a>
             <a href="webpages/html/CoxCh13CGIP/index.html" className='webLinks'>Fifth Webpage</a>
          
          <p className="cSharpProjectText">These webpages were created by me when I was learning to code HTML. All progress in intricacy gaining working links, buttons, and forms.</p>
          {/* <img id="projectImage" src={webpageScreenshot}></img> */}
          </div>

          <div id="phpDiv">
          <li className="cSharpProjectNames">Workout Tracker</li>

          <a href="webpages/php/Project3/Project3.php" className='webLinks'>Workout Tracker</a>
          
          <p className="cSharpProjectText">This php project is a mockup application for tracking a workout. It consists of a form as well as a backend database that will display the information inputted by the user.</p>
          <img id="projectImage" src={phpProjectScreenshot}></img>
          </div>

          <div id="vbDiv">
          <li className="cSharpProjectNames">Login Authenticator</li>
          <p className="cSharpProjectText">This simple visual basic program emulates a user login. It requires specific logging requirements and also enforces them with tooltips.</p>
          <img id="projectImage" src={visualBasicScreenshot}></img>
          </div>

          <div id="contactDiv">
          <li className="cSharpProjectNames">Contact</li>
          <div>

     <h3>Send Me A message!</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <input
         placeholder="Your Name"
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>

       <div className="form-group">
         <input
         placeholder="Your Email"
           type="email"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>

       <div className="form-group">        
         <textarea
         placeholder="Your Message"
           type="text"
           className="form-control"
           id="level"
           value={form.level}
           onChange={(e) => updateForm({ level: e.target.value })}
         />
       </div>

       <div className="form-group">
         <input
           type="submit"
           value="Send"
           className="btn btn-primary"
         />
       </div>
     </form>
     <h3>My Resume</h3>
     <p id="resumeText">You can download my resume from <a id="resumeLink" href="https://resume.us-southeast-1.linodeobjects.com/Aden_Cox_-_Programmer.pdf" target="_blank">here</a></p>
     <h3>Project Downloads</h3>
     <p  id="resumeText">You can download my project files from <a id="resumeLink" href="https://github.com/aden913/portfolioProjects" target="_blank">here</a></p>
   </div>
          </div>

          <footer>
          

          </footer>
    </div>
  );
}

export default App;
