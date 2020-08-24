import React from 'react';
import './event.scss';

const Event = ({title}) => {
  return (
    <div className='event'>{title}</div>
  )
}

export default Event;