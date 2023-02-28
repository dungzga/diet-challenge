import React, { useEffect, useState } from 'react';
import './Intermittent.scss';
import IF from '../assets/IF.png'
import { Link } from 'react-router-dom';
function Intermittent(){
    //Get Data from Local Storage
    var savedIFDayCount = localStorage.getItem("IFDayCount");
    var initialDayCount = parseInt(savedIFDayCount);
    var saveIFMonthCount = localStorage.getItem("IFMonthCount");
    var initialMonthCount = parseInt(saveIFMonthCount);
    var initialDate = localStorage.getItem("startDate");

    const [dayCount, setDayCount] = useState(initialDayCount || 0);
    const [monthCount, setMonthCount] = useState(initialMonthCount || 0);
    const [startDate, setStartDate] = useState(initialDate)

    var firework = document.getElementsByClassName("firework_container");
    function handleShowCongrat(){
        firework[0].style.visibility = "visible";
        firework[0].style.opacity = "1";
        let timerId = setTimeout(() => {
            firework[0].style.visibility = "hidden";
            firework[0].style.opacity = "0";
        },5000);
    }
    function handleDayCount(){
        setDayCount(dayCount + 1)
    }
    function resetAllCount(){
        setDayCount(0);
        setMonthCount(0);
    }
    window.addEventListener("load", function(){
        if((initialDayCount % 30) == 0){
            setMonthCount(initialMonthCount);
        }
    })
    
    //Change State of IF Month Count
    useEffect(()=>{
        if((dayCount !== 0) && ((dayCount % 30) == 0)){
            setMonthCount(monthCount + 1)
        } 
    },[dayCount]);

    //Save Day Count to Local Storage
    useEffect(()=>{
        localStorage.setItem("IFDayCount", dayCount);
    },[dayCount])

    //Save Month Count to Local Storage
    useEffect(()=>{
        localStorage.setItem("IFMonthCount", monthCount);
    },[monthCount])

    //Save Start Date to Local Storage
    useEffect(()=>{
        localStorage.setItem("startDate", startDate);
    },[startDate])

    function handleDateInput(e){
        var dateInput = e.target.value;
        setStartDate(dateInput)
    }
    return (
        <div>
        <div className="backto">
        <Link to="/">&larr; Back To Home</Link>
        </div>
        <div className="intermittent">
            
            <div className="intermittent_title">
                Intermittent Fasting Counting
            </div>
            <div className="intermittent_content">
                <div className="intermittent_content_section">
                    <img src={IF}/>
                    <div className="intermittent_content_section_countText">
                        Start Date:  
                        <input type="date" value={startDate} onChange={(e)=> handleDateInput(e)}></input>
                        <br/>     
                        <br />
                        Day Count: <span className="important-text">{dayCount}</span>
                        <br/>   
                        <br />
                        Month Count: <span className="important-text">{monthCount}</span>
                    </div>
                    <div className="intermittent_content_section_countBtn">
                        <button onClick={() => {handleShowCongrat();handleDayCount()}}>You did it today!</button>
                        <button onClick={()=> {resetAllCount()}}>Oops! Reset again</button>
                    </div>
                </div>

                <div className="intermittent_content_section">
                    <div className="intermittent_content_section_countText">
                    </div>
                </div>
            </div>
            <div className="firework_container">
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework_container_text">CONGRATULATIONS ON TODAY'S EFFORT!<br />
            <span className="important-text">KEEP GOING! YOU ALMOST THERE!</span></div>
            </div>
            
        </div>
        </div>
    )
}

export default Intermittent;