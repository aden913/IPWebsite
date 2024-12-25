import React from 'react';
//import poems from '../../public/webpages/html/PoemsReact/poems'
import { Link } from 'react-router-dom';
import "./styles/ReactPage.css";

function ReactPage() {
  return (
<div id="reactDiv">

<li className="ProjectNames">Random Swatches</li>
<a href="webpages/React/test.html" className='webLinks'>Random Swatches</a>
<p className="ProjectText"> This React app counts to ten, each increment adding a new randomly colored swatch, then upon reaching ten decrements and removes the swatches.</p>        
  

   
<li className="ProjectNames">Timed Swatches</li>
<a href="webpages/React/ReactTest1.html" className='webLinks'>Timed Swatches</a>                 
<p className="ProjectText"> This React app has ten swatches that are randomized on a ten second timer</p>        
   

    
<li className="ProjectNames"><Link to="/poems">My Poems But in React!</Link></li>
<p className="ProjectText">This is a react page created to store my created poems. It has also suited me as a bit of a playground to practice react code and implement it in different ways such as:</p>
  
    <li>React MarkDown</li>
    <li>React Pagination</li>

    <li className="ProjectNames"><Link to="/Art">A Collection of Art that I have done</Link></li>
<p className="ProjectText"> </p>
  

</div>
  );
}

export default ReactPage;
