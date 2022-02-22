import React from "react";


import c from "./Header.module.css";
const Header = (props) => {
  

  return (
    <div className="flex flexCenter blackBg">
    <header className={`${c.header} flex flexCenter flexSAround whiteFont width100 maxWidth400`}>
      <span> {props.user.toUpperCase().slice(0,1) + props.user.slice(1) || "[ user ]"}</span>
      <span>To read: {props.toRead || "0"}</span>
      <span>Reading: {props.reading || "0"}</span>
      <span>Done: {props.haveRead || "0"}</span>
    </header>
    </div>
  );
};

export default Header;
