import { doc, onSnapshot } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { authContext } from "../../context/AuthContextProvider";
import { db } from "../../firebase/firebase";

const ChatList = () => {
  const [users, setUsers] = useState([]);
  const user = useContext(authContext);
  useEffect(() => {
    const getUser = async () => {
      onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        setUsers(doc.data());
      });
    };
    user.uid && getUser();
  }, [user?.uid]);
  
  return (
    <div className="chat__list">
      {users.freinds?.map((user) => {
        const { photoURL, displayName, lastMessage } = user;
        return (
          <div className="sidebar__freind" key={user?.uid}>
            <img src={photoURL} alt="" />
            <p>
              <span>{displayName}</span>
              <br />
              <span className="last__msg">{lastMessage}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ChatList;
