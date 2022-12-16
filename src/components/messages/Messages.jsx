import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { userInfo } from "../../context/ChatContext";
import MessageInput from "../messageInput/MessageInput";
import MessageList from "../messagList/MessageList";

const Messages = () => {
  const { state } = useContext(userInfo);

  return state.chatId ? (
    <div className="messages">
      <div className="messages__top">
        <p className="current__freind">
          <img src={state.user.photoURL} alt="" />
          <span>{state.user.displayName}</span>
        </p>
        <p className="right">
          <img src="/img/cam.png" alt="" />
          <img src="/img/add.png" alt="" />
          <img src="/img/more.png" alt="" />
        </p>
      </div>
      <MessageList />
      <MessageInput />
    </div>
  ) : (
    <div className="messages no__chat">
      <p>Choose a chat to start the conversation</p>
    </div>
  );
};

export default Messages;
