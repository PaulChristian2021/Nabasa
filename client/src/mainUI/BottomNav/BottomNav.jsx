import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { RiQuillPenFill } from "react-icons/ri";
import { IoLibrarySharp } from "react-icons/io5";
import { FaGlasses } from "react-icons/fa";
import { ImLibrary } from "react-icons/im";

import c from "./BottomNav.module.css";

const BottomNav = (props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [currentTab, setCurrentTab] = useState("/books");

  useEffect(() => {
    setCurrentTab(pathname);
  }, [pathname]);

  function goTo(route) {
    navigate(route);
  }
  return (
    <div className="flex flexCenter">
      <nav className={`${c.nav} flex flexCenter blackBg maxWidth400`}>
        <div className={`${c.div} flex flexCenter`}>
          <button
            className={`${c.sideButtons} noBg noBorder grayFont ${
              currentTab === "/books" ? "whiteFont" : ""
            }`}
            onClick={() => goTo("/books")}
          >
            <IoLibrarySharp />
          </button>
          <button
            className={`${c.sideButtons} noBg noBorder grayFont ${
              currentTab === "/library" ? "whiteFont" : ""
            }`}
            onClick={() => goTo("/library")}
          >
            <ImLibrary />
          </button>
        </div>
        <button
          className={`${c.button} round salmonBg whiteFont noBorder`}
          onClick={() => props.toggleNewBookModal()}
        >
          <RiQuillPenFill />
        </button>
        <div className={`${c.div} flex flexCenter`}>
          <button
            className={`${c.sideButtons} noBg noBorder grayFont ${
              currentTab === "/" ? "whiteFont" : ""
            }`}
          >
            C
          </button>

          <button
            className={`${c.sideButtons} noBg noBorder grayFont ${
              currentTab === "/account" ? "whiteFont" : ""
            }`}
            onClick={() => goTo("/account")}
          >
            <FaGlasses />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default BottomNav;
