import React, {Fragment} from "react";
import "./datesection.scss";
import Event from "./Event";
import moment from "moment";
import RedLine from "./RedLine"

const Time = ({week, tasks, onDelete}) => {

    const timeNow = moment(new Date()).format('YYYY-MM-DD-ddd-HH');

    let hours = [];
    for (let i = 0; i <24; i++) {
      hours.push( i < 10?`0${i}:00`:`${i}:00`);
    }
    

    const renderTasks = (week, hours, timeNow) => { 
      return hours.map((el) => {
        const daysOfWeek = week.map(dayOfWeek => {

            const filtredTasks = tasks.filter(task => task.date === (dayOfWeek.slice(0, -4)) && task.timeStart.slice(0, -3) === el.slice(0, -3));

            let dayContainerNow = (`${dayOfWeek}-${el}`).slice(0, -3);

            return (
              <div className='time-container' key={`${dayOfWeek}-${el}`}>
                  {dayContainerNow === timeNow && <RedLine />}
                  {filtredTasks && filtredTasks.map(task => <Event key={task.id} title={task.title} timeStart={task.timeStart} timeFinish={task.timeFinish} onDelete={onDelete} id={task.id}/>)}
              </div>)
      })
      return (   
          <Fragment key={el}>
          <div className='time-container-1'>
              <div className='time-1' >{el === "00:00"? null : el}</div>
              <div className='time-2' ></div>
          </div>
            {daysOfWeek}
          </Fragment>
      )
      }
  )}
   
    const result = renderTasks(week, hours, timeNow);
    
    return (
      <main className='date-container wrapper-scroll' >
          {result}
      </main>
    )
  }
  
export default Time;
