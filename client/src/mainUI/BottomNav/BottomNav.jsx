import React from "react";
import { RiQuillPenFill } from "react-icons/ri";
import c from "./BottomNav.module.css";

const BottomNav = () => {
  return (
    <nav className={`${c.nav} flex flexCenter blackBg`}>
      <div className={`${c.div} flex flexCenter`}>
      <button className={`${c.sideButtons} noBg noBorder`}></button>
        <button className={`${c.sideButtons} noBg noBorder`}></button>
      </div>
      <button className={`${c.button} round salmonBg whiteFont noBorder`}>
        <RiQuillPenFill />
      </button>
      <div className={`${c.div} flex flexCenter`}>
        <button className={`${c.sideButtons} noBg noBorder`}></button>
        <button className={`${c.sideButtons} noBg noBorder`}></button>
      </div>
    </nav>
  );
};

export default BottomNav;
