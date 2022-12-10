import React from "react";
import MessageInput from "../messageInput/MessageInput";
import MessageList from "../messagList/MessageList";

const Messages = () => {
  return (
    <div className="messages">
      <div className="messages__top">
        <p className="current__freind">
          <img src="/img/pic.jpg" alt="" />
          <span>Pierre</span>
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
  );
};

export default Messages;
