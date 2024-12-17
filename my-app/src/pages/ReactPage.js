import React from 'react';
import poems from '../../public/webpages/html/PoemsReact/poems'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

'my-app/public/webpages/html/PoemsReact'
'my-app/src/pages/React'
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
        <a href="./my-app/public/webpages/html/PoemsReact/poems" className='webLinks'></a>
        <li><Link to="/poems">My Poems But in React!</Link></li>
  <Router>
    <Routes>
      <Route path="/poems" element={<poems />} />
    </Routes>
  </Router>
    </div>

    </div>

  );
}

export default ReactPage;
