import logo from './images/logo250.png';
import questionMark from './images/questionMark.png';
import React, { useState } from "react";




import amazingVideo from './images/amazingRacerVideo.mp4';
import chaosVideo from './images/chaosVideo.mp4';
import perilousVideo from './images/perilousVideo.mp4';
import captainVideo from './images/captainVideo.mp4';
import gauntletVideo from './images/gauntletVideo.mp4';
import safariVideo from './images/safariVideo.mp4';
import schoolVideo from './images/schoolVideo.mp4';


import visualBasicScreenshot from './images/visualBasicScreenshot.PNG';
import vbCongrats from './images/visualBasicCongrats.PNG';
import vb2Index from './images/vb2Index.PNG';
import vb2Summary from './images/vb2Complete.PNG';
import cPlusEx from './images/cPlusEx.PNG';
import appMain from './images/appMainMenu.jpg';
import appCreate from './images/appCreate.jpg';
import appLogin from './images/appLogin.jpg';
import app2Main from './images/app2Main.jpg';
import app2Play from './images/app2Play.jpg';
import app2Add from './images/app2Add.jpg';

import Collapsible from 'react-collapsible';


import './images/TTChocolates-Regular.otf';
import './App.css';



function App() {
  
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
  
    await fetch("https://inquisitiveprogramming.com/api/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({ name: "", position: "", level: "" });
 
  }

  return (
    <div className="App">
          <header id="logo"><img src={logo} alt="Logo"/></header>
          <nav>
          <ul id="navbar">
          <li> <a href="#aboutDiv">About</a></li>
          <li><a href="#cSharpDiv">C#</a></li>
          <li><a href="#cPlusPlusDiv">C++</a></li>
          <li><a href="#htmlDiv">HTML</a></li>
          <li><a href="#phpDiv">PHP</a></li>
          <li><a href="#javascriptDiv">JS</a></li>
          <li><a href="#reactDiv">REACT</a></li>
          <li><a href="#databaseDiv">DB</a></li>
          <li><a href="#vbDiv">VB</a></li>
          <li><a href="#appDiv">APPS</a></li>
          <li><a href="#contactDiv">Contact</a></li>
          </ul>
          </nav>

          <nav>
          <ul id="mobileNav">
            
          <li> <a href="#aboutDiv">About</a></li>
          <li><a href="#cSharpDiv">C#</a></li>
          <li><a href="#cPlusPlusDiv">C++</a></li>
          <li><a href="#htmlDiv">HTML</a></li>
          <li><a href="#phpDiv">PHP</a></li>
          <li><a href="#javascriptDiv">JS</a></li>
          <li><a href="#reactDiv">REACT</a></li>
          <li><a href="#databaseDiv">DB</a></li>
          <li><a href="#vbDiv">VB</a></li>
          <li><a href="#appDiv">APPS</a></li>
          <li><a href="#contactDiv">Contact</a></li>
          
          </ul>
          </nav>


          <div id="aboutDiv">
          <img src={questionMark} alt="question mark" id="questionMarkImg"/>
          
          <p id="aboutText">Here at Inquisitive Programming I prioritize understanding concepts and background of what I am typing when I program. I value understanding what I implement into my projects. During the process of creating my programs I make sure to ask any and all questions I need to in order to understand my goal and/or problem. I find that the more questions I ask, the better my end product is.I am a college student currently enrolled at Aiken Technical College. I am nearing the end of my last semester to getting my 'Major In Computer Technology Programming Emphasis'. Last but not least welcome to my programming portfolio!</p>          
          </div>

          <div id="cSharpDiv">               
            <div id="cSharpProjectDiv">             
          <li className="cSharpProjectNames">The Amazing Racer</li>
          <p className="cSharpProjectText">My first C# project. The goal of this project was to experiment with a little scripting as well as other Unity game design objects. I managed to create a simple game where you collect trophies to finish the game with a time that is recorded in the end.</p>
          <video className="videos"  autoPlay loop muted><source src={amazingVideo}></source></video>         
          <li className="cSharpProjectNames">Chaos ball</li>
          <p className="cSharpProjectText">My second ever c# project. This project had more scripting involved than the first. The goal of this game was to guide several colored balls into their accordingly matching goals. There are several uncolored balls meant to create chaos by knocking around other balls at high speeds. I managed to take creative authority and made a creative asthetic enviornment.</p>
          <video className="videos"  autoPlay loop muted><source src={chaosVideo}></source></video>
          <li className="cSharpProjectNames">Perilous Descent</li>
          <p className="cSharpProjectText">This was the midterm project for my c# class. This was the first project that we had open reign on whatever we wanted to create. I created a game where the objected is to get to the end of a hallway after descending past the lobby. Starting the game you begin very slow and cumbersome, barely able to avoid the obstacles. Once you die you recieve a 'death coin'. In the lobby if you have enough death coins you can purchase a couple upgrades which include the ability to jump and movement speed. This project was heavy on c# scripting and game design.</p>
          <video className="videos"  autoPlay loop muted><source src={perilousVideo}></source></video>
          <li className="cSharpProjectNames">Captain Blaster</li>
          <p className="cSharpProjectText">This was my first project being 2D. The game is a simple shoot em up scrolling space shooter. The scripting for a 2D game was definetily different but not as challenging. I did something unique from my classmates as I added a percentage instead of a simple score tracker that at 100% summons a boss at the end you must defeat. Getting to the boss at the beginning of the game will be no use however as you are not powerful enough. I have a main menu where you can choose 3 different weapons to use in game as well as an interface where you can upgrade the weapons with currency you gain in-game.</p>
          <video className="videos"  autoPlay loop muted><source src={captainVideo}></source></video>
          <li className="cSharpProjectNames">Gauntlet Runner</li>
          <p className="cSharpProjectText">A simple game where you run along a set path as far as you can. I added a projectile you can shoot to destroy obstacles in your path as well as changed the assets provided to give a cleaner and more appealing look.</p>
          <video className="videos"  autoPlay loop muted><source src={gauntletVideo}></source></video>
          <li className="cSharpProjectNames">Safari</li> 
          <p className="cSharpProjectText">Being my final project for my c# class I took my time to create a game that stretched my range of scipting. I delved into creating rays, AI, and using Time in my scripts. This game is simple yet addicting. You start out with low stats and a timer which when counts to 0 returns you to a shack. In the shack you can purchase upgrades such as: health, speed, time. You can also purchase upgrades for your weapon: damage, relaod speed, firerate, and magazine size. The objective of the game is to finish a series of bounties that require you to cull the nearby animals that get increasingly harder to accomplish. The scripting for this game was intense and I learned quite a bit while being completely entertained.</p>   
          <video className="videos"  autoPlay loop muted><source src={safariVideo}></source></video>
          </div>      
          </div>

          <div id="cPlusPlusDiv">
          <li className="cSharpProjectNames">School Escape</li>
          <p className="cSharpProjectText">School Escape was made entirely in C++. This is a text based adventure where you are stuck in a school with a monster, and you must find your way out. The techniques I used to create this game are pretty advanced. The c++ concepts used here include link-lists, pointers, simple ai, classes, and minor windows manipulation. I really like the class system I implemented the most. At the start of the game you can choose one of three characters to play as. Each have diffferent items to aid them on their escape. It took several months to code and create, alot of passion went into it and I am overall very satisfied with how it turned out.</p>
          <video className="videos"  autoPlay loop muted><source src={schoolVideo}></source></video>
          </div>

          <div id="cPlusPlusDiv">
          <li className="cSharpProjectNames">Pointers</li>
          <p className="cSharpProjectText">This excersize was a introduction into using pointers in c++. Pointers are very powerful and can manage how you send variables and other data using the computers memory.</p>
          
          <Collapsible trigger="Number Sorter">
          <img id="projectImage" src={cPlusEx} alt='a c plus plus project'></img>
          </Collapsible>

          <div id='codeBlock'>           
            <Collapsible trigger="Code Snippet">
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

          <div id="htmlDiv">
            <li className="cSharpProjectNames">My Websites</li>
             <a href="webpages/html/CoxCh5/index.html" className='webLinks'>First Webpage</a>
             <a href="webpages/html/CoxCh6/index.html" className='webLinks'>Second Webpage</a>
             <a href="webpages/html/CoxCh7/index.html" className='webLinks'>Third Webpage</a>
             <a href="webpages/html/CoxCh13/index.html" className='webLinks'>Fourth Webpage</a>
             <a href="webpages/html/CoxCh13CGIP/index.html" className='webLinks'>Fifth Webpage</a>
            <br></br>
            <a href="http://rwd-examples.inquisitiveprogramming.com/Bootstrap_Demo/index.html" className='webLinks'>Bootstrap Example</a>
            <a href="http://rwd-examples.inquisitiveprogramming.com/ch9/CoxAdenCh9/index.html" className='webLinks'>Responsive Design Example</a>
          <br></br>
          {/* This is the poems website for summit */}
          <a href="webpages/html/Poems/index.html" className='webLinks'>Poems</a>

          <p className="cSharpProjectText">These webpages were created by me when I was learning to code HTML. All progress in intricacy gaining working links, buttons, and forms.<br></br> There is also a simle example using several bootstrap options as well as another simple example for responsive design to manage mobile devices.</p>
          </div>

          <div id="phpDiv">
          <li className="cSharpProjectNames">MVVC PHP Project</li>
          <a href="webpages/php/coxaden7/index.php" className='webLinks'>MVVC PHP Project</a>
          <p className="cSharpProjectText">This php project involvd turning our project structure into the mvvc layout. The project itself connects to and manages a database.</p>
          </div>

          <div id="phpDiv">
          <li className="cSharpProjectNames">User Management</li>
          <a href="webpages/php/coxaden8/index.php" className='webLinks'>User Management</a>
          <p className="cSharpProjectText">This php project added on to the previous one to create a database to manage new users logging into the site.</p>
          </div>

          <div id="javascriptDiv">
          <li className="cSharpProjectNames">Workout Tracker</li>
          <a href="webpages/Javascript/Project3/index.php" className='webLinks'>Workout Tracker</a>
          <p className="cSharpProjectText">This javascript project is a mockup application for tracking a workout. It consists of a form as well as a backend database that will display the information inputted by the user.</p>
          </div>

          <div id="javascriptDiv">
          <li className="cSharpProjectNames">Ballot Box</li>
          <a href="webpages/Javascript/Project2.html" className='webLinks'>Ballot Box</a>
          <p className="cSharpProjectText">This javascript project takes 6 numbers </p>
          </div>

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

          <div id="databaseDiv">
          <li className="cSharpProjectNames">SQL Insert, Update, and Delete</li>
                        
          <p className="cSharpProjectText"> This database requirement recquired me to perform multiple inserts, updates, and deletes, in a MYSQL database.</p>      
          
          </div>
          <div id='codeBlock'> 
          <Collapsible trigger="SQL statements">
           
            <code>
            use books<br></br>
            <br></br>
INSERT INTO Publisher &#x28;PubID,Name,Contact,Phone&#x29;<br></br>
VALUES &#x28;8,"Printing Prints", "Aden Cox", "803-555-5555"&#x29;;<br></br>
INSERT INTO Books &#x28;ISBN, Title,PubDate,PubID,Cost,Retail,Category&#x29;<br></br>
VALUES &#x28;0000000001, "Newest New Book", '2021-09-29',8,20.00,30.00,"LITERATURE"&#x29;;<br></br>
INSERT INTO Author &#x28;AuthorID,Lname,Fname&#x29;<br></br>
VALUES &#x28;"Z100","Aden","Cox"&#x29;;<br></br>
INSERT INTO BookAuthor&#x28;ISBN,AuthorID&#x29;<br></br>
VALUES &#x28;0000000001,"Z100"&#x29;;<br></br>
INSERT INTO customers&#x28;Customernum,LastName,FirstName&#x29;<br></br>
VALUES &#x28;1030,"Cox","Aiden"&#x29;;<br></br>
INSERT INTO orders&#x28;Ordernum,Customernum,OrderDate&#x29;<br></br>
VALUES &#x28;1031,1030,'2021-09-29'&#x29;;<br></br>
INSERT INTO OrderItems&#x28;Ordernum,Itemnum,ISBN,Quantity&#x29;<br></br>
VALUES &#x28;1031,5,0000000001,1&#x29;;<br></br>

delete from bookauthor <br></br>
where authorid = "Z100";<br></br>
delete from orderitems<br></br>
where isbn = 0000000001;<br></br>
delete from books<br></br>
where PubID = 8;<br></br>
delete from orders<br></br>
where Ordernum = 1031;<br></br>
delete from customers<br></br>
where customernum = 1030;<br></br>
<br></br>
use lyric<br></br>
<br></br>
UPDATE SalesPeople<br></br>
Set Base = 200.0000<br></br>
WHERE SalesID = 3;<br></br>
<br></br>
UPDATE SalesPeople<br></br>
SET Base =Base + 50.0000<br></br>
WHERE FirstName = "Bob" <br></br>
and LastName = "Bentley";<br></br>
<br></br>
UPDATE Members<br></br>
SET WorkPhone = HomePhone<br></br>
WHERE FirstName = "Frank" and LastName = "Payne";<br></br>
<br></br>
UPDATE Titles<br></br>
SET UPC = "1828344222", Genre = "pop"<br></br>
WHERE title = "Time Flies";<br></br>
<br></br>
UPDATE Members<br></br>
SET SalesId = 4<br></br>
WHERE Region = "VA"<br></br>
and SalesID = 3;<br></br>
<br></br>
use crashcourse<br></br>
<br></br>
UPDATE customers<br></br>
SET cust_name = Upper&#x28;cust_name&#x29;;<br></br>
<br></br>
UPDATE vendors<br></br>
SET vend_state = "SC", vend_city = "Aiken"<br></br>
Where vend_state is NULL<br></br>
or vend_city is NULL;<br></br>
<br></br>
UPDATE orderitems, products<br></br>
SET item_price = item_price +&#x28;item_price*.15&#x29;, prod_price = prod_price + &#x28;prod_price*.15&#x29;<br></br>
WHERE products.prod_id = orderitems.prod_id;<br></br>
            </code>
          
          </Collapsible>
          </div>

          <div id="databaseDiv">
          <li className="cSharpProjectNames">SQL Create</li>                        
          <p className="cSharpProjectText"> This SQL assignment is for creating databases. I learned how to create and manipulate a database as well as multiple tables and rows.</p> 
          </div>
          <div id='codeBlock'>      
          <Collapsible trigger="SQL statements">
           
            <code>
create database Painters;<br></br>
<br></br>
use Painters;<br></br>
DROP USER 'Moe'@'localhost';<br></br>
DROP USER 'Larry'@'localhost';<br></br>
DROP USER 'Curly'@'localhost';<br></br>
<br></br>
DROP VIEW vwFullName;<br></br>
DROP VIEW vwTotalPay;<br></br>
<br></br>
drop index ix_FK_JOB ON JOB;<br></br>
drop index ix_FK_EMPJOB ON EMPJOB;<br></br>
drop index ix_cust_FullName ON CUSTOMER;<br></br>
<br></br>
DROP TABLE CUSTOMER;<br></br>
DROP TABLE JOB;<br></br>
DROP TABLE EMPLOYEE;<br></br>
DROP TABLE EMPJOB;   <br></br>
<br></br>
create table Painters.CUSTOMER&#x28;<br></br>
custphone 		char&#x28;12&#x29;<br></br>
				NOT NULL<br></br>
				unique,<br></br>
ctype 			enum&#x28;'C','R'&#x29; NULL,<br></br>
clname 			varchar&#x28;35&#x29;<br></br>
				NOT NULL,<br></br>
cfname 			varchar&#x28;15&#x29;<br></br>
				NOT NULL,<br></br>
caddr 			varchar&#x28;40&#x29; NULL,<br></br>
ccity 			varchar&#x28;20&#x29; NULL,<br></br>
cstate	 		char&#x28;2&#x29;<br></br>
				 NULL<br></br>
				default "SC",<br></br>
				PRIMARY KEY&#x28;custphone&#x29;&#x29;;<br></br>
create table Painters.JOB&#x28;<br></br>
jobnum			 MEDIUMINT UNSIGNED<br></br>
				 NOT NULL<br></br>
				 UNIQUE,<br></br>
custphone		 char&#x28;12&#x29;<br></br>
				 NOT NULL<br></br>
				 unique<br></br>
				 REFERENCES Customer&#x28;custphone&#x29;,<br></br>
jobstartdate	 DATE<br></br>
				 NULL,<br></br>
description		 TEXT<br></br>
				 NULL,<br></br>
amobilled		 MEDIUMINT UNSIGNED<br></br>
				 NULL,<br></br>
PRIMARY KEY&#x28;jobnum&#x29;&#x29;;<br></br>
<br></br>
create table Painters.EMPLOYEE&#x28;<br></br>
essn			 char&#x28;9&#x29;<br></br>
				 NOT NULL<br></br>
				 UNIQUE,<br></br>
elname			 varchar&#x28;35&#x29;<br></br>
				 NOT NULL,<br></br>
efname			 varchar&#x28;15&#x29;<br></br>
				 NOT NULL,<br></br>
ephone			 char&#x28;12&#x29;<br></br>
				 NOT NULL<br></br>
				 UNIQUE,				<br></br>
hrrate			 DECIMAL&#x28;5,2&#x29;<br></br>
				 NULL<br></br>
				 DEFAULT 15.75,<br></br>
PRIMARY KEY&#x28;essn&#x29;<br></br>
&#x29;;<br></br>
create table Painters.EMPJOB&#x28;<br></br>
essn			 char&#x28;9&#x29; NOT NULL UNIQUE REFERENCES EMPLOYEE&#x28;essn&#x29;,<br></br>
jobnum			 MEDIUMINT UNSIGNED NOT NULL UNIQUE REFERENCES JOB&#x28;jobnum&#x29;,<br></br>
hrsperjob		 DECIMAL&#x28;5,2&#x29;<br></br>
&#x29;;<br></br>
<br></br>
CREATE INDEX ix_cust_FullName ON CUSTOMER&#x28;cfname, clname&#x29;;<br></br>
<br></br>
CREATE INDEX ix_FK_JOB ON JOB&#x28;custphone&#x29;;<br></br>
CREATE INDEX ix_FK_EMPJOB ON EMPJOB &#x28;essn, jobnum&#x29;;<br></br>
<br></br>
CREATE USER Moe@localhost IDENTIFIED BY "MoePass";<br></br>
GRANT ALL<br></br>
ON painters.*<br></br>
TO Moe@localhost;<br></br>
<br></br>
CREATE USER Larry@localhost IDENTIFIED BY "LarryPass";<br></br>
GRANT SELECT<br></br>
ON Painters.*<br></br>
TO Larry@localhost;<br></br>
<br></br>
CREATE USER Curly@localhost IDENTIFIED BY "CurlyPass";<br></br>
GRANT All<br></br>
ON Painters.CUSTOMER<br></br>
TO Curly@localhost;<br></br>
<br></br>
GRANT ALL<br></br>
ON painters.JOB<br></br>
To Curly@localhost;<br></br>
<br></br>
GRANT SELECT<br></br>
ON Painters.EMPLOYEE<br></br>
TO Curly@localhost;<br></br>
<br></br>
GRANT SELECT<br></br>
ON Painters.EMPJOB<br></br>
TO Curly@localhost;<br></br>
<br></br>
INSERT INTO CUSTOMER &#x28;custphone, ctype, clname, cfname, caddr, ccity, cstate&#x29;<br></br>
VALUES &#x28;"803 111-1111", "C", "Howard", "Moe", "111 street name","North Augusta", "SC"&#x29;;<br></br>
<br></br>
INSERT INTO CUSTOMER &#x28;custphone, ctype, clname, cfname, caddr, ccity, cstate&#x29;<br></br>
VALUES &#x28;"803 222-222", "C", "Fine", "Larry", "222 street name","North Augusta", "SC"&#x29;;<br></br>
<br></br>
INSERT INTO CUSTOMER &#x28;custphone, ctype, clname, cfname, caddr, ccity, cstate&#x29;<br></br>
VALUES &#x28;"803 333-3333", "C", "Howard", "Curly", "333 street name","North Augusta", "SC"&#x29;;<br></br>
<br></br>
INSERT INTO JOB &#x28;jobnum, custphone, jobstartdate, description, amobilled&#x29;<br></br>
VALUES &#x28;1,"803 111-1111",'2021/10/20',"Tom-foolery and mischeif.", 100.00&#x29;;<br></br>
<br></br>
INSERT INTO JOB &#x28;jobnum, custphone, jobstartdate, description, amobilled&#x29;<br></br>
VALUES &#x28;2,"803 222-222",'2021/10/20',"Tom-foolery and mischeif.", 50.00&#x29;;<br></br>
<br></br>
INSERT INTO JOB &#x28;jobnum, custphone, jobstartdate, description, amobilled&#x29;<br></br>
VALUES &#x28;3,"803 333-3333",'2021/10/20',"Tom-foolery and mischeif.", 10.00&#x29;;<br></br>
<br></br>
INSERT INTO EMPLOYEE &#x28;essn, elname, efname, ephone, hrrate&#x29;<br></br>
VALUES &#x28;"111111111", "Howard","Shemp", "803-444-4444", 50.00&#x29;;<br></br>
<br></br>
INSERT INTO EMPLOYEE &#x28;essn, elname, efname, ephone, hrrate&#x29;<br></br>
VALUES &#x28;"222222222", "Besser","Joe", "803-555-5555", 50.00&#x29;;<br></br>
<br></br>
INSERT INTO EMPLOYEE &#x28;essn, elname, efname, ephone, hrrate&#x29;<br></br>
VALUES &#x28;"333333333", "DeRita","Joe", "803-666-6666", 50.00&#x29;;<br></br>
<br></br>
INSERT INTO EMPJOB &#x28;essn,jobnum,hrsperjob&#x29;<br></br>
VALUES &#x28;"111111111",1,3&#x29;;<br></br>
<br></br>
INSERT INTO EMPJOB &#x28;essn,jobnum,hrsperjob&#x29;<br></br>
VALUES &#x28;"222222222",2,1&#x29;;<br></br>
<br></br>
INSERT INTO EMPJOB &#x28;essn,jobnum,hrsperjob&#x29;<br></br>
VALUES &#x28;"333333333",3,2.5&#x29;;<br></br>
<br></br>
Update  CUSTOMER<br></br>
Set 		ccity = "Georgia"<br></br>
Where 	ccity = "North Augusta";<br></br>
<br></br>
Update  JOB<br></br>
Set 		amobilled = 5.00<br></br>
Where 	amobilled = 50.00;<br></br>
<br></br>
Update   EMPLOYEE<br></br>
Set  		hrrate = 105.00<br></br>
Where  	essn = "111111111";<br></br>
<br></br>
Update  EMPJOB<br></br>
Set 		hrsperjob = 10<br></br>
Where 	hrsperjob = 2.5;<br></br>
<br></br>
DELETE FROM CUSTOMER<br></br>
WHERE custphone = "803 333-3333";<br></br>
<br></br>
DELETE FROM JOB<br></br>
WHERE jobnum = 3;<br></br>
<br></br>
DELETE FROM EMPLOYEE<br></br>
WHERE essn = "333333333";<br></br>
<br></br>
DELETE FROM EMPJOB<br></br>
WHERE essn = "333333333";<br></br>
<br></br>
Create View vwFullName As <br></br>
SELECT CONCAT&#x28;cfname, ", " ,clname&#x29; as "Customer-Full-Name",jobnum, jobstartdate,CONCAT&#x28;efname, ", " ,elname&#x29;As "Employee-Full-Name"<br></br>
FROM CUSTOMER c, JOB j, EMPLOYEE E <br></br>
WHERE c.custphone = j.custphone;<br></br>
<br></br>
Create View vwTotalPay As<br></br>
SELECT CONCAT&#x28;efname, ", " ,elname&#x29;As "Employee-Full-Name", SUM&#x28;amobilled&#x29;<br></br>
FROM EMPLOYEE e, JOB j<br></br>
GROUP BY efname;<br></br>
            </code>
          
          </Collapsible>
          </div>
          

          <div id="vbDiv">
          <li className="cSharpProjectNames">Login Authenticator</li>
          <p className="cSharpProjectText">This simple visual basic program emulates a user login. It requires specific logging requirements and also enforces them with tooltips.</p>
          </div>
          <div id='codeBlock'> 
          <Collapsible trigger="Login Page">
          <img id="projectImage" src={visualBasicScreenshot} alt='a visual basic project'></img>
          </Collapsible>
          <Collapsible trigger="Congrats Page">
          <img id="projectImage" src={vbCongrats} alt='a visual basic project'></img>
          </Collapsible>
         </div>
          
          <div id="vbDiv">
          <li className="cSharpProjectNames">Item Cart</li>
          <p className="cSharpProjectText">This visual basic program takes orders and adds up the total of the ordered items and provides info based on what is entered.</p>
          </div>
          <div id='codeBlock'> 
          <Collapsible trigger="Order Page">
          <img id="projectImage" src={vb2Index} alt='a visual basic project'></img>
          </Collapsible>
          <Collapsible trigger="Summary Page">
          <img id="projectImage" src={vb2Summary} alt='a visual basic project'></img>
          </Collapsible>
          </div>

          <div id="appDiv">
          <li className="cSharpProjectNames">Question Quest</li>
          <p className="cSharpProjectText">This app is intended to be a cross between trivia crack and quizlet. We intended for users to be able to create trivia and send them to people so that they may play them. The uses could be simple entertainment or even for teachers to send out a quiz to there students to study.</p>
          </div>
          <div id='codeBlock'>
          <Collapsible trigger="Login Page">
          <img id="projectImage" src={appLogin} alt='an app' className='bigPicture'></img>
          </Collapsible>
          <Collapsible trigger="Main Page">
          <img id="projectImage" src={appMain} alt='an app' className='bigPicture'></img>
          </Collapsible>
          <Collapsible trigger="Create Page">
          <img id="projectImage" src={appCreate} alt='an app' className='bigPicture'></img>
          </Collapsible>
          </div>

          <div id="appDiv">
          <li className="cSharpProjectNames">Unmatched Helper</li>
          
          <p className="cSharpProjectText">This app is meant to assist in playing a board game known as unmatched. It will assist in tracking your health as well as some characters passive abilities. It also contains a function to help decide random 2 on 2 teams.</p>
          </div>
          <div id='codeBlock'>
          <Collapsible trigger="Login Page">
          <img id="projectImage" src={app2Main} alt='an app' className='bigPicture'></img>
          </Collapsible>
          <Collapsible trigger="Main Page">
          <img id="projectImage" src={app2Add} alt='an app' className='bigPicture'></img>
          </Collapsible>
          <Collapsible trigger="Create Page">
          <img id="projectImage" src={app2Play} alt='an app' className='bigPicture'></img>
          </Collapsible>
          </div>

          <div id="contactDiv">
          <li className="cSharpProjectNames">Contact</li>
          <div>

     <h3>Send Me A message!</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
       <label htmlFor='name' >name</label>
         <input        
          placeholder="Your Name"
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>

       <div className="form-group">
       <label htmlFor='position' >email</label>
         <input
         placeholder="Your Email"
           type="email"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>

       <div className="form-group">   
       <label htmlFor='level' > message</label>     
         <textarea
         placeholder="Your Message"
           type="text"
           className="form-control"
           id="level"
           value={form.level}
           onChange={(e) => updateForm({ level: e.target.value })}
         />
       </div>

       <div className="form-group">
        <label id="hideMe" htmlFor='submit' >submit button</label>
         <input
           type="submit"
           id="submit"
           value="Send"
           className="btn btn-primary"
         />
       </div>
     </form>
     <h3>My Resume</h3>
     <p id="resumeText">You can download my resume from <a id="resumeLink" href="https://resume.us-southeast-1.linodeobjects.com/Aden_Cox_-_Programmer.pdf" target="_blank" rel="noreferrer">here</a></p>
     <h3>Project Downloads</h3>
     <p  id="resumeText">You can download my project files from <a id="resumeLink" href="https://github.com/aden913/portfolioProjects" target="_blank" rel="noreferrer">here</a></p>
   </div>
          </div>

          <footer>          
          </footer>
    </div>
  );
}

export default App;
