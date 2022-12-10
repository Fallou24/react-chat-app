import React from "react";

const MessageInput = () => {
  return (
    <div className="message__input">
      <form>
        <input type="text" placeholder="Type something..." />
        <div className="right">
          <label htmlFor="file">
            <img src="/img/img.png" alt="" className="add_img" />
          </label>
          <input type="file" id="file"  style={{display:"none"}}/>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
