import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";
import { MdOutlinePending } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";
import c from "./BookItem.module.css";

const BookItem = (props) => {
  console.log(props);
  const [options, setOptions] = useState(false);
  const genres = props.genres
    ? props.genres
    : ["Genre 1", "Genre 2", "Genre 3"];

  function toggleOptions(e) {
    if (
      e.target.tagName == "BUTTON" ||
      e.target.tagName == "svg" ||
      e.target.tagName == "path" ||
      e.target.tagName == "circle" ||
      e.target.classList.contains("notTarget")
    )
      return;
    else setOptions(!options);
  }
  return (
    <li
      onClick={toggleOptions}
      className={`${c.li} flex flexSBetween flexColumn smoothEdge whiteBg shadow margin5 pointer`}
    >
      <div className="flex flexSBetween padding5">
        <div>
          <p><b>{props.title || "Title"}</b></p>
          <p><i>{props.author || "Author"}</i></p>
          <ul className={`${c.genres} flex flexCenter noBulletList darkFont`}>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
        <div>
          <img
            src={props.image || "favicon.ico"}
            alt={props.title || ""}
            width={"100px"}
            height={"100%"}
          />
        </div>
      </div>
      {options && (
        <div className={`${c.options} padding5`}>
          <hr />
          <p>
            {props.description || (
              <span>
                Alas, the coder was rather busy. Or lazy.
                <br />
                Therefore, no description provided.
              </span>
            )}
          </p>
          <div
            className={`notTarget ${c.statuses} flex flexSBetween padding5 darkBg`}
          >
            {props.myBooks && (
              <>
                <div className="flex ">
                  <button className="flex noBorder noBg grayFont">
                    <AiOutlineCheckCircle />
                  </button>
                  <button className="flex noBorder noBg whiteFont ">
                    <MdOutlinePending />
                  </button>
                </div>
                <div className="flex ">
                  <button
                    className="flex noBorder noBg grayFont"
                    style={{ fontSize: "22px" }}
                  >
                    <BsPencilFill />
                  </button>
                  <button className="flex noBorder noBg grayFont">
                    <AiOutlineDelete />
                  </button>
                </div>
              </>
            )}
            {!props.myBooks && (
              <div className="flex width100">
                <button
                  className="flex flexCenter width100 noBorder noBg grayFont"
                  title="Add book"
                >
                  <BiBookAdd />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </li>
  );
};

export default BookItem;
