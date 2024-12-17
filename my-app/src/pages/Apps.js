import React from 'react';
import Collapsible from 'react-collapsible';
import appMain from '../images/appMainMenu.jpg';
import appCreate from '../images/appCreate.jpg';
import appLogin from '../images/appLogin.jpg';
import app2Main from '../images/app2Main.jpg';
import app2Play from '../images/app2Play.jpg';
import app2Add from '../images/app2Add.jpg';

function Apps() {
  return (
    <div>
     
   <div id="appDiv">
   <li className="cSharpProjectNames">Question Quest</li>
   <p className="cSharpProjectText">This app is intended to be a cross between trivia crack and quizlet. We intended for users to be able to create trivia and send them to people so that they may play them. The uses could be simple entertainment or even for teachers to send out a quiz to there students to study.</p>
   </div>
   <div id='codeBlock'>
   <Collapsible trigger="Login Page">
   <img id="projectImage" src={appLogin} alt='an app' className='bigPicture'></img>
   </Collapsible>
   <Collapsible trigger="Main Page">
   <img id="projectImage" src={appMain} alt='an app' className='bigPicture'></img>
   </Collapsible>
   <Collapsible trigger="Create Page">
   <img id="projectImage" src={appCreate} alt='an app' className='bigPicture'></img>
   </Collapsible>
   </div>

   <div id="appDiv">
   <li className="cSharpProjectNames">Unmatched Helper</li>
   
   <p className="cSharpProjectText">This app is meant to assist in playing a board game known as unmatched. It will assist in tracking your health as well as some characters passive abilities. It also contains a function to help decide random 2 on 2 teams.</p>
   </div>
   <div id='codeBlock'>
   <Collapsible trigger="Login Page">
   <img id="projectImage" src={app2Main} alt='an app' className='bigPicture'></img>
   </Collapsible>
   <Collapsible trigger="Main Page">
   <img id="projectImage" src={app2Add} alt='an app' className='bigPicture'></img>
   </Collapsible>
   <Collapsible trigger="Create Page">
   <img id="projectImage" src={app2Play} alt='an app' className='bigPicture'></img>
   </Collapsible>
   </div>
    </div>
  );
}

export default Apps;
