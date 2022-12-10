import React from "react";

const ChatList = () => {
  return (
    <div className="chat__list">
      <div className="sidebar__freind">
        <img src="/img/pic.jpg" alt="" />
        <p>
          <span>Carol</span><br />
          <span className="last__msg">Hello</span>
        </p>
      </div>
      <div className="sidebar__freind">
        <img src="/img/pic.jpg" alt="" />
        <p>
          <span>Carol</span><br />
          <span className="last__msg">Hello</span>
        </p>
      </div>
      <div className="sidebar__freind">
        <img src="/img/pic.jpg" alt="" />
        <p>
          <span className="name">Carol</span><br />
          <span className="last__msg">Hello</span>
        </p>
      </div>
    </div>
  );
};

export default ChatList;
