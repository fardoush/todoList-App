import React, { useState } from 'react';

const DigitalClock = () => {

    let time = new Date () .toLocaleTimeString();

    const [curTime,setCurTime] = useState('time');

    const UpdateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurTime(time);
    }

    setInterval(UpdateTime,1000);
    return(
        <>
            <div className="digital-clock-inner">

                <h1>Digital Clock</h1>
                <h2 className="digital-clock"> {curTime}</h2>
            </div>
        </>
    )
}

export default DigitalClock;