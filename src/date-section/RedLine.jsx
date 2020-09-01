import React, {useEffect, useState} from 'react';
import moment from "moment";
import "./datesection.scss";

const RedLine = () => {

    const [minutesNow, setMinutesNow] = useState(moment(new Date()).format('m'));

    const style = {top: `${minutesNow * 1.3}px`};

    useEffect(() => {
        const interval = setInterval(() => {
            setMinutesNow((minutesNow)=> minutesNow + 1)
        }, 60000);
        return () => {
            clearInterval(interval);
        }
        
    });

    return (
      <>
      <div className='redBall' style={style}></div>
      <div className='redLine' style={style}></div>
      </>
    )
}

export default RedLine;