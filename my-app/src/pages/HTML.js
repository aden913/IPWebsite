import React from 'react';

function HTML() {
  return (
    <div className='AlignCenter'>
    <li className="ProjectNames">My Websites</li>
    <div>
      <fieldset id="arranger">
      <legend>College Website Assignments</legend>
     <a href="webpages/html/CoxCh5/index.html" className='webLinks'>First Webpage</a>
     <a href="webpages/html/CoxCh6/index.html" className='webLinks'>Second Webpage</a>
     <a href="webpages/html/CoxCh7/index.html" className='webLinks'>Third Webpage</a>
     <a href="webpages/html/CoxCh13/index.html" className='webLinks'>Fourth Webpage</a>
     <a href="webpages/html/CoxCh13CGIP/index.html" className='webLinks'>Fifth Webpage</a>
    <br></br>
    <a href="http://rwd-examples.inquisitiveprogramming.com/Bootstrap_Demo/index.html" className='webLinks'>Bootstrap Example</a>
    <a href="http://rwd-examples.inquisitiveprogramming.com/ch9/CoxAdenCh9/index.html" className='webLinks'>Responsive Design Example</a>
    </fieldset>
    </div>

  <br></br>
  {/* This is the poems website for summit */}
  <a href="webpages/html/Poems/index.html" className='webLinks'>My Poems!</a>
  <a href="webpages/html/SummitsPoems/index.html" className='webLinks'>Summit's Poems</a>

  <a href="MeganAlmon.com" className='webLinks'>MeganAlmon.com</a>


  <li className="ProjectText">
    I have a strong foundation in html design. I find it interesting and fun to learn more concepts surrounding web design with a foundation of html. 
  </li>
  <li className="ProjectText">
    MeganAlmon.com is a website that was made for a christian apologetic speaker to serve as a landing page for people to learn more about her and possibly inquire about booking her to speak. This was mostly done using wordpress.
  </li>
  <li className="ProjectText">
    The websites created while in studying in school are rather basic. They have built up though provide a foundation in concepts that are extremely important for web design. For example: Web Responsiveness, accessibility, as well as readibilty, and asthetics. 
      </li>
  </div>
  );
}

export default HTML;