import React from "react";

import c from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={`${c.header} flex flexCenter flexSAround blackBg whiteFont `}>
      <span> {props.user || "Master"}</span>
      <span>To read: {props.toRead || "0"}</span>
      <span>Reading: {props.reading || "0"}</span>
      <span>Done: {props.haveRead || "0"}</span>
    </header>
  );
};

export default Header;
