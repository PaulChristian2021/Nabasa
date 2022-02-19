import React from "react";
import { useNavigate } from "react-router-dom";

import { RiQuillPenFill } from "react-icons/ri";
import { IoLibrarySharp } from "react-icons/io5";
import { FaGlasses } from "react-icons/fa";
import { ImLibrary } from "react-icons/im";

import c from "./BottomNav.module.css";

const BottomNav = () => {
  const navigate = useNavigate();

  function goToBooksList(route) {
    navigate(route);
  }
  return (
    <nav className={`${c.nav} flex flexCenter blackBg `}>
      <div className={`${c.div} flex flexCenter`}>
        <button
          className={`${c.sideButtons} noBg noBorder grayFont`}
          onClick={() => goToBooksList("/books")}
        >
          <IoLibrarySharp />
        </button>
        <button
          className={`${c.sideButtons} noBg noBorder grayFont`}
          onClick={() => goToBooksList("/library")}
        >
          <ImLibrary/>
        </button>
      </div>
      <button
        className={`${c.button} round salmonBg whiteFont noBorder`}
        onClick={() => goToBooksList("/account")}
      >
        <RiQuillPenFill />
      </button>
      <div className={`${c.div} flex flexCenter`}>
        <button className={`${c.sideButtons} noBg noBorder grayFont`}>C</button>
        <button
          className={`${c.sideButtons} noBg noBorder grayFont`}
          onClick={() => goToBooksList("/account")}
        >
          <FaGlasses />
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
