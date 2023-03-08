import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from 'react-router-dom';
const Feeditem = (props) => {
  const navigate = useNavigate();
  const callMe = (id)=>{
    console.log(id);
    navigate('/details/'+id);
  }
  return (
    <div className='feed-item-container' onClick={()=>callMe(props.activity.id)}>
      <div className='item-direction'> {(props.activity.direction == "outbound") ? <FontAwesomeIcon icon={faPhone}  size="lg" /> : <FontAwesomeIcon icon={faPhoneVolume}  size="lg" />}</div>
      <div className='item-details'>
        <div>{props.activity.from}</div>
        <div className='item-details-on'>tried to call on {props.activity.to}</div>
      </div>
      <div className='item-time'>{props.activity.callTime}</div>
    </div>
  );
};

export default Feeditem;
