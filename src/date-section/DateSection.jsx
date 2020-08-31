import React from 'react';
import "./datesection.scss";
import Time from "./Time";

const DateSection = ({result, week, tasks, onDelete}) => {
  
  return (
    <>
      <section  className='date-container scroll'>
        <div className='day timezone'>
        GMT+03
        </div>
        {result}
      </section>
      <Time week={week} tasks={tasks} onDelete={onDelete}/>
    </>
  )
}

  export default DateSection;
