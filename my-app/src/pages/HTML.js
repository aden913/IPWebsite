import React from 'react';

function HTML() {
  return (
    <div id="htmlDiv">
    <li className="cSharpProjectNames">My Websites</li>
    <div>
      <h1>College Website Assignments</h1>
     <a href="webpages/html/CoxCh5/index.html" className='webLinks'>First Webpage</a>
     <a href="webpages/html/CoxCh6/index.html" className='webLinks'>Second Webpage</a>
     <a href="webpages/html/CoxCh7/index.html" className='webLinks'>Third Webpage</a>
     <a href="webpages/html/CoxCh13/index.html" className='webLinks'>Fourth Webpage</a>
     <a href="webpages/html/CoxCh13CGIP/index.html" className='webLinks'>Fifth Webpage</a>
    <br></br>
    <a href="http://rwd-examples.inquisitiveprogramming.com/Bootstrap_Demo/index.html" className='webLinks'>Bootstrap Example</a>
    <a href="http://rwd-examples.inquisitiveprogramming.com/ch9/CoxAdenCh9/index.html" className='webLinks'>Responsive Design Example</a>
    </div>

  <br></br>
  {/* This is the poems website for summit */}
  <a href="webpages/html/Poems/index.html" className='webLinks'>My Poems!</a>
  <a href="webpages/html/SummitsPoems/index.html" className='webLinks'>Summit's Poems</a>

  <a href="MeganAlmon.com" className='webLinks'>MeganAlmon.com</a>


  <p className="cSharpProjectText">These webpages were created by me when I was learning to code HTML. All progress in intricacy gaining working links, buttons, and forms.<br></br> There is also a simle example using several bootstrap options as well as another simple example for responsive design to manage mobile devices.</p>
  </div>
  );
}

export default HTML;
