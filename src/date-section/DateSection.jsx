import React from 'react';
import "./datesection.scss";
import Time from "./Time";

function DateSection() {
  return (
    <section className="date-container">
        <div className="day timezone">
        GMT+03
        </div>
        <div className="day">
            <span className="day-of-week">
                Sun
            </span>
            <span className="day-number">
                16
            </span>
            <div className="day-border"></div>
        </div>
        <div className="day">
            <span className="day-of-week">
                Mon
            </span>
            <span className="day-number">
                17
            </span>
            <div className="day-border"></div>

        </div>
        <div className="day">
            <span className="day-of-week">
                Tue
            </span>
            <span className="day-number">
                18
            </span>
            <div className="day-border"></div>

        </div>
        <div className="day">
            <span className="day-of-week">
                Wed
            </span>
            <span className="day-number">
                19
            </span>
            <div className="day-border"></div>

        </div>
        <div className="day">
            <span className="day-of-week">
                Thu
            </span>
            <span className="day-number">
                20
            </span>
            <div className="day-border"></div>

        </div>
        <div className="day">
            <span className="day-of-week">
                Fri
            </span>
            <span className="day-number">
                21
            </span>
            <div className="day-border"></div>

        </div>
        <div className="day">
            <span className="day-of-week">
                Sat
            </span>
            <span className="day-number">
                22
            </span>
            <div className="day-border"></div>

        </div>
        <Time/>
    </section>
      
    
  );
}

export default DateSection;
