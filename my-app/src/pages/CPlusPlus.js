import React from 'react';
import Collapsible from 'react-collapsible';
import schoolVideo from '../images/schoolVideo.mp4';
import cPlusEx from '../images/cPlusEx.PNG';
import SEGame from './resources/SchoolEscape.zip';
import "./styles/CPlusPlus.css";
function CPlusPlus() {
  return (
    <div>

      
   <div id="cPlusPlusDiv">
   <li className="cSharpProjectNames">School Escape</li>
   <p className="cSharpProjectText">School Escape was made entirely in C++. This is a text based adventure where you are stuck in a school with a monster, and you must find your way out. The techniques I used to create this game are pretty advanced. The c++ concepts used here include link-lists, pointers, simple ai, classes, and minor windows manipulation. I really like the class system I implemented the most. At the start of the game you can choose one of three characters to play as. Each have diffferent items to aid them on their escape. It took several months to code and create, alot of passion went into it and I am overall very satisfied with how it turned out.</p>
   <video className="videos"  autoPlay loop muted><source src={schoolVideo}></source></video>
   <a href={SEGame}> Download and play school escape!</a>
   <p>School Escape is built to be played on windows. Will likely fail to work on anything else...</p>
   </div>

   <div id="cPlusPlusDiv">
   <li className="cSharpProjectNames">Pointers</li>
   <p className="cSharpProjectText">This excersize was a introduction into using pointers in c++. Pointers are very powerful and can manage how you send variables and other data using the computers memory.</p>
   
   <div>
   <Collapsible trigger="Number Sorter">
   <img id="projectImage" src={cPlusEx} alt='a c plus plus project'></img>
   </Collapsible>

   <div id='codeBlock'>           
    <Collapsible trigger="Number Sorter Code ">
      <code>
     vector&lt;int&gt; myVec;<br></br>
int number;<br></br>
vector&lt;int&gt;::iterator iter;<br></br>
int* Sorter(vector&lt;int&gt;* vector);<br></br>
for (int i = 0; i != 10; ++i)<br></br>
&#x7B;<br></br>
cout &lt;&lt; "Number " &lt;&lt; i + 1 &lt;&lt; ": ";<br></br>
cin 	&lt;&lt; number;<br></br>
myVec.push_back(number);<br></br>
&#x7D;<br></br>
Sorter(&myVec);<br></br>
for (iter = myVec.begin(); iter != myVec.end(); ++iter)<br></br>
&#x7B;<br></br>
cout &lt;&lt; *iter &lt;&lt; "  " ;<br></br>
&#x7D;<br></br>
return 0;<br></br>
&#x7D;<br></br>
int* Sorter(vector&lt;int&gt;* vector)<br></br>
&#x7B;<br></br>
for (int i = 0; i &lt; 9; i++)<br></br>
&#x7B;<br></br>
for (int i = 0; i &lt; 9; i++)<br></br>
&#x7B;<br></br>
int temp;<br></br>
int number;<br></br>
temp = (*vector)[i];<br></br>
if (temp 	&#xFE65; (*vector)[i + 1])<br></br>
&#x7B;<br></br>
 (*vector)[i] = (*vector)[i + 1];<br></br>
 (*vector)[i + 1] = temp;<br></br>
 &#x7D;<br></br>
&#x7D;<br></br>
&#x7D; <br></br>
return 0;<br></br>
      </code>
    </Collapsible>             
   </div>
   </div>
   </div>
    </div>
  );
}

export default CPlusPlus;
