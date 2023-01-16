import React, { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { authContext } from "../../context/AuthContextProvider";
import { userInfo } from "../../context/ChatContext";

const Message = ({ message }) => {
  const user = useContext(authContext);
  const { state } = useContext(userInfo);
  const ref = useRef();
  
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={ref}
      className={message.uid === user.uid ? "message current__msg" : "message"}
    >
      <p className="message__left">
        <img src={message.uid===user.uid ? user.photoURL : state.user.photoURL} alt="" className="sender__img" />
        <br />
        <span className="date">just now</span>
      </p>
      <p className="message__content">
        <span>{message.text}</span>
        {message.image && (
          <img src={message.image} alt="" className="message__img" />
        )}
      </p>
    </div>
  );
};

export default Message;
