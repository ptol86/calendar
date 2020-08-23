import React from 'react';
import "./datesection.scss";
import Time from "./Time";

function DateSection({daysMapped, date}) {
    console.log(daysMapped)
    const week = date;
    return (
    <>
    <section className="date-container scroll">
        <div className="day timezone">
        GMT+03
        </div>
        {daysMapped}
    </section>
            <Time week={week}/>
    </>
    
  );
}

export default DateSection;
