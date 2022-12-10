import React from "react";
import Messages from "../../components/messages/Messages";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss"
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Sidebar />
        <Messages />
      </div>
    </div>
  );
};

export default Home;
