import React from "react";

import c from "./Header.module.css";
const Header = (props) => {
  const loggedIn = props.user ? true : false;
  return (
    <div className="flex flexCenter blackBg">
      <header
        className={`${c.header} flex flexCenter flexSAround whiteFont width100 maxWidth400`}
      >
        {loggedIn ? (
          <>
            <span>
              {" "}
              {props.user.toUpperCase().slice(0, 1) + props.user.slice(1) ||
                "[ user ]"}
            </span>
            <span>To read: {props.toRead || "0"}</span>
            <span>Reading: {props.reading || "0"}</span>
            <span>Done: {props.haveRead || "0"}</span>
          </>
        ) : (
          <h1 className="font25">Nabasa</h1>
        )}
      </header>
    </div>
  );
};

export default Header;
