import React, {useEffect, useState} from 'react';
import moment from "moment";
import "./datesection.scss";

const RedLine = () => {

    const [minutesNow, setMinutesNow] = useState(moment(new Date()).format('m'));
    // console.log(minutesNow)

    const style = {top: `${minutesNow}.3px`};
    console.log(style)
    const minInterval = setInterval(() => setMinutesNow(moment(new Date()).format('m')), 60000);

    useEffect(() => {
        setInterval(() => setMinutesNow(moment(new Date()).format('m')), 60000);

    });

    return (
      <>
      <div className='redBall' style={style}></div>
      <div className='redLine' style={style}></div>
      </>
    )
}

export default RedLine;