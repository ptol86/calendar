import React, {useEffect, useState} from 'react';
import moment from "moment";
import "./datesection.scss";

const RedLine = () => {

    const [minutesNow, setMinutesNow] = useState(moment(new Date()).format('m'));

    const style = {top: `${minutesNow}.3px`};

    useEffect(() => {
        const interval = setInterval(() => {
            setMinutesNow((minutesNow)=> minutesNow + 1)
        }, 60000);
        return () => {
            clearInterval(interval);
        }
        // setInterval(() => setMinutesNow(moment(new Date()).format('m')), 60000);
        // intervalId();
        // clearInterval(intervalId);
        // return (()=> {
            
        // })
    });

    return (
      <>
      <div className='redBall' style={style}></div>
      <div className='redLine' style={style}></div>
      </>
    )
}

export default RedLine;