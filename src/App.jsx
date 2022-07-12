import React, { useState } from 'react';
import DigitalClock from './DigitalClock';
import IncDecNum from './IncrementDecrement';

const App = () =>{

  
    // let time = new Date ().toLocaleTimeString();
    // const [curTime,setCurTime] = useState("time");



    // const updateTime = () => {
    //     let time = new Date ().toLocaleTimeString();
    //     setCurTime(time);
    // };

    // setInterval(updateTime,1000);
    

    return(

        <>
        <div className="main-section">
        <h1 className="main-heading"> React Mini Project </h1>
        <p>Digital Clock, Increment Decrement, ToDo Lost App</p>
            <div className="section-wrapper">
            <DigitalClock/>
            <IncDecNum/>
                <div className="section-inner">
              
                </div>
            </div>
        </div>
            {/* <h2 className="digital-clock"> {curTime}</h2> */}
        </>
    )
}

export default App;