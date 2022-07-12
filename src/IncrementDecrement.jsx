import React, { useState } from 'react';


const IncDecNum = () => {

 
    const [count,setCount] = useState(0);

    const IncNum = () => {
        setCount (count  + 1);
    }

    const DecNum = () => {
        if(count > 0){
            setCount(count-1);
        }
        else{
            setCount(0);
        }
    }
    return(
        <>
           <div className="incDec-inner">
           <h1> {count} </h1>
            <button className="inc" onClick={IncNum}>  +</button>
            <button className="dec" onClick={DecNum}> - </button>
           </div>
        </>
    )
}

export default IncDecNum;