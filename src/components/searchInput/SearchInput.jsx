import React from "react";

const SearchInput = () => {
  return (
    <div className="search__form">
      <form>
        <input type="text" className="search" placeholder="Find a user" />
      </form>
      <div className="sidebar__freind" style={{ display: "none" }}>
        <img src="/img/pic.jpg" alt="" />
        <p>
          <span>Carol</span><br />
          <span className="last__msg">Hello</span>
        </p>
      </div>
    </div>
  );
};

export default SearchInput;
