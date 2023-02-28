import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
const getCurrentWeightLS = localStorage.getItem("currentWeight");
const initialCurrentWeight = parseInt(getCurrentWeightLS);
const [currentWeight, setCurrentWeight] = useState(initialCurrentWeight);
const targetWeight = 72;
const startedWeight = 80;
let percentageToGoal = (1 - ((currentWeight - targetWeight) / (startedWeight - targetWeight))) * 100;

function handleWeightInput (e) {
    var inputValue = e.target.value;
    setCurrentWeight(inputValue)
}

//Handle Save Current Weight to Local Storage
useEffect(() => {
    localStorage.setItem("currentWeight", currentWeight)
},[currentWeight])

//Handle Progress Bar Loading 
useEffect(()=> {
    var progressBar = document.getElementsByClassName("inner");
    progressBar[0].style.width = `${percentageToGoal}%`;
}, [currentWeight])
    

  return (
    <div className="home">
      <div className="container">
        <div className="pacman"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>
        <div className="path"></div>

      </div>
      
      <div className="home_content">
        
        <div className="home_content_title">
          <span>Welcome to my diet App!</span>
        </div>
        <div className="home_content_text">
          <span>
            I'm creating this app as a motivation to push me through diet
            challenge.
            <br />
            I've failed sometimes but not this time!!!
            <br />
            <span className="important-text">
              This pacman represents my love for food!
            </span>
          </span>
        </div>

        
      </div>

      <div className="progress">
      <span className="progress_bar">Progress Until I reach My Goal</span>
          <div className="outer">
            <div className="inner"></div>
          </div>
          

          <div className="progress_text">
          <div className="startedWeight">
                <span>Started Weight: <span className="important-text">{startedWeight}KG</span></span>
            </div>
            <div className="targetWeight">
                <span>Target Weight: <span className="important-text">{targetWeight}KG</span></span>
            </div>

            <div className="currentWeight">
                <span>Current Weight</span>
                <input type="text" value={currentWeight ? currentWeight : "" } placeholder={"Enter your current weight"}
                onChange={(e)=>handleWeightInput(e)}></input>
            </div>
            <div className="toGoal">
                <span>To Goal: <span className="important-text">{(currentWeight - targetWeight) ? Math.floor((currentWeight - targetWeight)) : 0}KG</span></span>
            </div>
          </div>
        </div>

        <div className="home_linkpages">
          <div className="home_linkpages_Btn">
            <Link to="/intermittent">Intermittent</Link>
          </div>
          <div className="home_linkpages_Btn">
            <Link to="/runningrecord">Running Record</Link>
          </div>
        </div>
    </div>
  );
}

export default Home;
