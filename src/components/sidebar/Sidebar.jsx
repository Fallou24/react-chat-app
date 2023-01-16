import { signOut } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { authContext } from "../../context/AuthContextProvider";
import { userInfo } from "../../context/ChatContext";
import { auth } from "../../firebase/firebase";
import ChatList from "../chatList/ChatList";
import SearchInput from "../searchInput/SearchInput";

const Sidebar = () => {
  const user = useContext(authContext);
  const { dispatch } = useContext(userInfo);
  const handleLogout = () => {
    signOut(auth);
    dispatch({ type: "logout" });
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Chat App</h3>
        <p className="user__detail">
          <img src={user?.photoURL} alt="" className="user__img" />
          <span>{user?.displayName}</span>
          <button onClick={handleLogout}>Logout</button>
        </p>
      </div>
      <SearchInput />
      <ChatList />
    </div>
  );
};

export default Sidebar;
