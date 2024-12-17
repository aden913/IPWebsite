import React from 'react';

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
    </div>
  );
}

export default ReactPage;
