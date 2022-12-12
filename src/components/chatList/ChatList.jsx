import { collection, onSnapshot, query } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { authContext } from "../../context/AuthContextProvider";
import { userInfo } from "../../context/ChatContext";
import { db } from "../../firebase/firebase";

const ChatList = () => {
  const [users, setUsers] = useState([]);
  const user = useContext(authContext);
  const { dispatch } = useContext(userInfo);

  useEffect(() => {
    const getUserChat = async () => {
      const q = query(collection(db, "users/" + user.uid + "/userChats"));
      onSnapshot(q, (snapShot) => {
        setUsers(snapShot.docs.map((doc) => ({ ...doc.data() })));
      });
    };
    getUserChat();
  }, [user.uid]);
  const handleSelect = (selected) => {
    const combinedId =
      user.uid > selected.uid
        ? user.uid + selected.uid
        : selected.uid + user.uid;
    dispatch({
      type: "selectUser",
      payload: { id: combinedId, user: selected },
    });
  };
  
  return (
    <div className="chat__list">
      {users
        ?.sort((d1, d2) => new Date(d2.date?.seconds) - new Date(d1.date?.seconds))
        .map((user) => {
          const { photoURL, displayName, lastMessage } = user;
          return (
            <div
              className="sidebar__freind"
              key={user?.uid}
              onClick={() => handleSelect(user)}
            >
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
