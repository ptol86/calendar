import React from 'react';
import "./datesection.scss";

function Time() {
    let result = []
    for (let i = 0; i < 24; i++) {
        result.push(
            <>
        <div className="time-container">
        {`${i} ${i <=12? "AM": "PM"}`}
        </div>
        <div className="time-container">
            
            
        </div>
        <div className="time-container">
            
           

        </div>
        <div className="time-container">
           
            

        </div>
        <div className="time-container">
           
           

        </div>
        <div className="time-container">
            
            

        </div>
        <div className="time-container">
           
            

        </div>
        <div className="time-container">
           
           

        </div>
        </>)
    }
    return (
        result
  );
}

export default Time;
