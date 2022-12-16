import React from "react";
import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useContext } from "react";
import { userInfo } from "../../context/ChatContext";
import { useState } from "react";
import Message from "../message/Message";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const { state } = useContext(userInfo);
  useEffect(() => {
    onSnapshot(doc(db, "chats", state.chatId), (doc) => {
      setMessages(doc.data());
    });
  }, [state.chatId]);

  return (
    <div className="message__list">
      <div className="message__list-container">
        {messages.messages?.map((message, index) => {
          return (
            <Message key={index} message={message}/>
          );
        })}
      </div>
    </div>
  );
};

export default MessageList;
