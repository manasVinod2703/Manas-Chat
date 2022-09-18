import userEvent from '@testing-library/user-event';
import React from 'react'
import { useEffect } from 'react';
import { useContext , useRef} from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext';

const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  // using useRef to scroll to the latest message
  const ref = useRef();
  useEffect(()=>{
    ref.current?.scrollIntoView({behavior : "smooth"})
  },[message])

  return (
    <div className={`message ${message.senderId === currentUser.uid ? 'owner' :"" }`}>
        <div className="messageInfo">
            <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt=""  />
            <span>Just Now</span>
        </div>
        <div className="messageContent">
             {message.text && <p>{message.text}</p>}
             {message.img && <img src={message.img} alt = ""/>}
        </div>
    </div>
  )
}

export default Message