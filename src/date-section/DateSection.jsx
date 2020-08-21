import React, { useState } from 'react';
import "./datesection.scss";
import Time from "./Time";
import moment from "moment";

function DateSection({daysMapped}) {

    // const dateNow = new Date()
    // const [currentDate, setCurrentDate] = useState(moment(dateNow).week('week'))
    // const [weekStart, setWeekStart] = useState(currentDate.clone().startOf('week'))
    // console.log(currentDate)
    
    // const today = +(moment(dateNow).format("d"));
    // const getSunday = (dateNow, today) => moment(dateNow).subtract(today, "days").add(7, "days").format("D/ddd/M/YYYY");

    // console.log(getSunday(dateNow, today))
    
    // // const currentDate = moment(dateNow).week('week');

    
    // // let weekStart = currentDate.clone().startOf('week').subtract(7, "days");
    // console.log(weekStart)

    // let days = [];
    // for (let i = 0; i <= 6; i++) {
    //         days.push(moment(weekStart).add(i, 'days').format("YYYY-MM-DD-ddd"));
    // }
    // console.log(days)
    // const daysMapped = days.map(day => {
    //     return (
    //       <div className="day">
    //         <span className="day-of-week">{day.split("-")[3].toUpperCase()}</span>
    //         <span className="day-number">{day.split("-")[2]}</span>
    //         <div className="day-border"></div>
    //       </div>
    //   )});
    
    return (
    <>
    <section className="date-container scroll">
        <div className="day timezone">
        GMT+03
        </div>
        {daysMapped}
    </section>
            <Time/>
    </>
    
  );
}

export default DateSection;
