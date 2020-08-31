import React, {useState} from 'react';
import './event.scss';


const Event = ({timeStart, timeFinish, title, onDelete, id}) => {
  let minutes = timeStart.slice(3);
  
  const style1 = {top: '2px'};
  const style2 = {top: '10px', marginLeft: '10px', background: 'rgb(76, 176, 263)'};
  const style3 = {top: '20px', marginLeft: '20px', background: 'rgb(76, 186, 283)'};
  const style4 = {top: '30px', marginLeft: '30px', background: 'rgb(76, 196, 298)'};
  
  const [showDeleteButton, setShowDelete] = useState(false);
  
  const func = (event) => {
    event.preventDefault();
    if (event.button === 2) {
      setShowDelete(!showDeleteButton)
    }
    return;
    
  }
 
  return (
    <>
      <div
            
        onContextMenu={func} 
        className='event' 
          style={minutes <= '15' 
          ? style1 : minutes < '30' 
          ? style2 : minutes < '45' 
          ? style3 : style4}
      >
        <div className='title'>{title}</div>
        <span>
          {`${timeStart} - ${timeFinish}`}
        </span>
      </div>
      {showDeleteButton ? 
      <button
       className='button-event-delete'
       onClick={() => onDelete(id)}>
        <i className="fas fa-trash-alt"></i>
        <span className='delete-btn'>Delete</span> 
      </button> : null
      }
      </>
  )
}
export default Event;