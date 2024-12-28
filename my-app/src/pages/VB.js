import React from 'react';
import Collapsible from 'react-collapsible';
import visualBasicScreenshot from '../images/visualBasicScreenshot.PNG';
import vbCongrats from '../images/visualBasicCongrats.PNG';
import vb2Index from '../images/vb2Index.PNG';
import vb2Summary from '../images/vb2Complete.PNG';


function CSharp() {
  return (
    <div>
     
   <div className='AlignCenter'>
   <li className="ProjectNames">Login Authenticator</li>
   <p className="ProjectText">This simple visual basic program emulates a user login. It requires specific logging requirements and also enforces them with tooltips.</p>
   </div>

   <div id='codeBlock'> 
   <Collapsible trigger="Login Page">
   <img id="projectImage" src={visualBasicScreenshot} alt='a visual basic project'></img>
   </Collapsible>
   <Collapsible trigger="Congrats Page">
   <img id="projectImage" src={vbCongrats} alt='a visual basic project'></img>
   </Collapsible>
  </div>
   
   <div className='AlignCenter'>
   <li className="ProjectNames">Item Cart</li>
   <p className="ProjectText">This visual basic program takes orders and adds up the total of the ordered items and provides info based on what is entered.</p>
   </div>

   <div id='codeBlock'> 
   <Collapsible trigger="Order Page">
   <img id="projectImage" src={vb2Index} alt='a visual basic project'></img>
   </Collapsible>
   <Collapsible trigger="Summary Page">
   <img id="projectImage" src={vb2Summary} alt='a visual basic project'></img>
   </Collapsible>
   </div>
   
    </div>
  );
}

export default CSharp;
