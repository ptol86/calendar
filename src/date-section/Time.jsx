import React from "react";
import "./datesection.scss";
import Event from "./Event";

function Time({week}) {
    console.log(week)

    let result = [];
    console.log(result)

    const click = (e) => {
        let element = document.getElementById("2020-08-23-Sun-0:00")
        console.log(e.target.id)
        console.log(element.id)
    }
    let tasks = [
        {
            id: "2020-08-25-Tue-0:00",
            title: "zalupa",

        },
        {
            id: "2020-08-24-Mon-1:00",
            title: "pizda",

        },
        {
            id: "2020-08-23-Sun-2:00",
            title: "jopa",

        }
    ]
    for (let i = 0; i <24; i++) {
        result.push(
        <>
            <div className="time-container-1" id={+(+(week[0])+(week[1]))}>
                <div className="time-1" >
                {`${i > 0 && i < 24 ? `${i}:00` : ""}`}
                </div>
                <div className="time-2"></div>
            </div>
            <div className="time-container" onClick={click} id={`${week[0]}-${i >= 0 && i < 24 ? `${i}:00` : ""}`}>
                {tasks.find(el => el.id === (`${week[0]}-${i >= 0 && i < 24 ? `${i}:00` : ''}`)) ? <Event title={tasks.find(el => el.id === (`${week[0]}-${i >= 0 && i < 24 ? `${i}:00` : ''}`)).title}/> : null}
            </div>
            <div className='time-container' id={`${week[1]}-${i >= 0 && i < 24 ? `${i}:00` : ''}`}>
                {tasks.find(el => el.id === (`${week[1]}-${i >= 0 && i < 24 ? `${i}:00` : ''}`)) ? <Event title={tasks.find(el => el.id === (`${week[1]}-${i >= 0 && i < 24 ? `${i}:00` : ''}`)).title}/> : null}
            </div>
            <div className="time-container" id={`${week[2]}-${i >= 0 && i < 24 ? `${i}:00` : ""}`}>
                {tasks.find(el => el.id === (`${week[2]}-${i >= 0 && i < 24 ? `${i}:00` : ''}`)) ? <Event title={tasks.find(el => el.id === (`${week[2]}-${i >= 0 && i < 24 ? `${i}:00` : ''}`)).title}/> : null}
            </div>
            <div className="time-container" id={`${week[3]}-${i >= 0 && i < 24 ? `${i}:00` : ""}`}></div>
            <div className="time-container" id={`${week[4]}-${i >= 0 && i < 24 ? `${i}:00` : ""}`}></div>
            <div className="time-container" id={`${week[5]}-${i >= 0 && i < 24 ? `${i}:00` : ""}`}></div>
            <div className="time-container" id={`${week[6]}-${i >= 0 && i < 24 ? `${i}:00` : ""}`}></div>
        </>
        )
    }
    // tasks.map((el) => {
    //     if (el.id) {
    //         let element = document.getElementById(`${el.id}`);
    //         result.push(element.appendChild('span'); 
    //     }
    // })

    return (
    <main className="date-container wrapper-scroll">
            {result}
    </main>
    
  )
}

export default Time;
