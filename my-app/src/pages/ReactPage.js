import React from 'react';
//import poems from '../../public/webpages/html/PoemsReact/poems'
import { Link } from 'react-router-dom';


function ReactPage() {
  return (
    <div>
      <div id="reactDiv">
   <li className="cSharpProjectNames">Random Swatches</li>

   <a href="webpages/React/test.html" className='webLinks'>Random Swatches</a>
   
   <p className="cSharpProjectText"> This React app counts to ten, each increment adding a new randomly colored swatch, then upon reaching ten decrements and removes the swatches.</p>        
   </div>

   <div id="reactDiv">
   <li className="cSharpProjectNames">Timed Swatches</li>
   <a href="webpages/React/ReactTest1.html" className='webLinks'>Timed Swatches</a>                 
   <p className="cSharpProjectText"> This React app has ten swatches that are randomized on a ten second timer</p>        
   </div>

    <div id="reactDiv">
        <li><Link to="/poems">My Poems But in React!</Link></li>
  <p>This is a react page created to store my created poems. It has also suited me as a bit of a playground to practice react code and implement it in different ways such as:</p>
  <ul>
    <li>React MarkDown</li>
    <li>React Pagination</li>
    <li></li>
  </ul>
    
    </div>

    </div>

  );
}

export default ReactPage;
