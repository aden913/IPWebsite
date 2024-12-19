import React from 'react';
import "./styles/JS.css"
function JS() {
  return (
    <div>
      
   <div id="JSDiv">
   <li className="cSharpProjectNames">Workout Tracker</li>
   <a href="webpages/Javascript/Project3/index.php" className='webLinks'>Workout Tracker</a>
   <p className="cSharpProjectText">This javascript project is a mockup application for tracking a workout. It consists of a form as well as a backend database that will display the information inputted by the user.</p>
   </div>

   <div id="JSDiv">
   <li className="cSharpProjectNames">Ballot Box</li>
   <a href="webpages/Javascript/Project2.html" className='webLinks'>Ballot Box</a>
   <p className="cSharpProjectText">This javascript project takes 6 numbers and compares them to a random array of numbers 1-50. If the user guesses a number they win. </p>
   </div>
    </div>
  );
}

export default JS;
