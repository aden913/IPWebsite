import React from 'react';
import amazingVideo from '../images/amazingRacerVideo.mp4';
import chaosVideo from '../images/chaosVideo.mp4';
import perilousVideo from '../images/perilousVideo.mp4';
import captainVideo from '../images/captainVideo.mp4';
import gauntletVideo from '../images/gauntletVideo.mp4';
import safariVideo from '../images/safariVideo.mp4';
import './styles/CSharp.css';
function CSharp() {
  return (
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
  );
}

export default CSharp;
