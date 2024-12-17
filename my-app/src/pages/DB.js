import React from 'react';
import Collapsible from 'react-collapsible';

function DB() {
  return (
    <div>
     
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
    </div>
  );
}

export default DB;
