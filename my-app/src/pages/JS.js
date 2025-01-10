import React from 'react';
import { Link } from 'react-router-dom';

function JS() {
  return (
    
      
   <div className='AlignCenter'>

   <li className="ProjectNames">Workout Tracker</li>
   <a href="webpages/Javascript/Project3/index.php" className='webLinks'>Workout Tracker</a>
   <p className="ProjectText">This javascript project is a mockup application for tracking a workout. It consists of a form as well as a backend database that will display the information inputted by the user.</p>

   <li className="ProjectNames">Ballot Box</li>
   <a href="webpages/Javascript/Project2.html" className='webLinks'>Ballot Box</a>
   <p className="ProjectText">This javascript project takes 6 numbers and compares them to a random array of numbers 1-50. If the user guesses a number they win. </p>
  
  <li className='ProjectNmaes'>Three.js project</li>
  <li className="ProjectNames"><Link to="/Three">Three.js project: Logo</Link></li>
  <p className="ProjectText">I was curious to learn how to use three.js. Three.js is a 3d website creation language that uses jsx to create a 3d environment. </p>

  
    </div>
  );
}

export default JS;
