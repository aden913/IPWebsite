import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import { Component } from "react";
import { useState } from 'react';
import arrayShuffle from 'array-shuffle';


  

function App() {

useEffect(() => {
for (var i = 0; i < 10; i++) {
    arrColors = [...arrColors, randColor()]    
  }
  setArrAllColors(arrColors);
}, [])
var testArray = [1,2,3];

    var backScore = 0;
    var backHighScore = 0;
    var orderNum= 0;
    var arrColors = [];
    var clickedCards = [];
    const [arrAllColors, setArrAllColors] = useState([]);
    const [highScore, setHighScore] = useState(0);
    const [score, setScore] = useState(0);


    //////////////////////////////////////////////////////////start of card
    //////////////////////////////////////////////////////////

    class Square extends React.Component {
      render() {
    var squareStyle = {
      height: 55,
    backgroundColor: this.props.color
    };
    return (
     <div style={squareStyle}></div>

    );
  }
  
}
    class Label extends React.Component {
      render() {
    var labelStyle = {
      fontFamily: "sans-serif",
    fontWeight: "bold",
    padding: 13,
    fontSize:10 ,
    margin: 0

    };
    return (
    <p style={labelStyle}>{this.props.color}</p>
    );
  }
}
    class Card extends React.Component {
      render() {
    var cardStyle = {
      height: 80,
    width: 70,
    padding: 0,
    backgroundColor: "#fff",
    margin: "15px",
    boxShadow: "0px 0px 5px #666",
    pointerEvents: "none",
    display: "inline-block"
    };
    return (
    <div style={cardStyle}>
      <Square color={this.props.color} />
      <Label color={this.props.color} />
    </div>
    );
  }
}
    function randomNumber() {
  var num = Math.floor(Math.random() * 16);
    if (num == 10) {
      num = "A";
  }
    else if (num == 11) {
      num = "B";
  }
    else if (num == 12) {
      num = "C";
  }
    else if (num == 13) {
      num = "D";
  }
    else if (num == 14) {
      num = "E";
  }
    else if (num == 15) {
      num = "F";
  }
    return num;
}
    function randomHex() {
  var hex = "#";
    hex = hex + randomNumber();
    hex = hex + randomNumber();
    hex = hex + randomNumber();
    hex = hex + randomNumber();
    hex = hex + randomNumber();
    hex = hex + randomNumber();
    return hex;
}

function randColor() {
  var colors = [randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex(), randomHex()];//["#393E41", "#E94F37", "#1C89BF", "#A1D363", "#11f", "#2b2", "#3d3", "#4c4", "#5e5", "#f66","#e77", "#c88", "#a99", "#c00", "#e10", "#d20", "#1b0", "#1f0", "#1a0", "#1b0"];
  var ran = Math.floor(Math.random() * colors.length);
  
  const handlechange = (index) => {
    var dupeFound = false;
    var theIndex = index.target.className;
    console.log("clicky clicked index is:" + index.target.className);
  
    if(clickedCards.length == 0)
    {
      clickedCards.push(theIndex);
      setScore((prevState) => prevState = prevState + 1); 
      ++backScore;
    }
    else
    {
    for (var i = 0; i < clickedCards.length; i++) {
      if(theIndex == clickedCards[i])
      {
        if(backScore > backHighScore)
        {
          setHighScore(backScore);
          backHighScore = backScore;
          setScore(0);
          backScore = 0;
          clickedCards = [];
          dupeFound = true;
        }
        else
        {
          setScore(0);
          backScore = 0;
          clickedCards = [];
          dupeFound = true;
        }
      }
    }
    if(dupeFound == false)
      {
        clickedCards.push(theIndex);
        setScore((prevState) => prevState = prevState + 1);
        ++backScore;

      }
  }
  console.log(arrAllColors.length);
  console.log(arrColors.length);

    shuffle(arrColors);
    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }

    setArrAllColors([...arrColors]);
  };

orderNum++;
  return <div id="orderDiv" className={orderNum} index={orderNum} onClick={(index) => { handlechange(index); }}><Card color={colors[ran]} /></div>;
}
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////end of cardS     |onClick = {() =>flip(Card)}|       onChange={e => setName(e.target.value)}  
return(
    <div className="App">
        <>
        <h1 id = "highScore">High Score = {highScore}</h1>
        <h1 id = "score">Score = {score}</h1>
          {arrAllColors}
          <h3 id = "instructions">Your goal is to click cards to earn a point.<br></br>If you click the same card twice your score will reset.</h3>
        </>
    </div>);
  
}

export default App;
