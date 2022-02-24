import React, { useState, useContext } from "react";
import { AiFillCheckCircle, AiOutlineDelete } from "react-icons/ai";
import { MdPending } from "react-icons/md";
import { RiTimer2Line } from "react-icons/ri";
import { BsPencilFill } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";
import c from "./BookItem.module.css";

import { NewBookModalContext } from "../../App";
import { useEffect } from "react";

const BookItem = (props) => {
  const newBookModalContext = useContext(NewBookModalContext);
  console.log(newBookModalContext);
  console.log(props);

  const [options, setOptions] = useState(false);
  const genres = props.genres ? props.genres : ["No genre listed"];
  const [status, setStatus] = useState()

  function toggleOptions(e) {
    if (
      e.target.tagName === "BUTTON" ||
      e.target.tagName === "svg" ||
      e.target.tagName === "path" ||
      e.target.tagName === "circle" ||
      e.target.classList.contains("notTarget")
    )
      return;
    else setOptions(!options);
  }
  function addLibraryBook() {
    newBookModalContext.setNewBookModal(true);
    newBookModalContext.setGoogleBookToNewBook(props);
  }
  function changeStatus() {
    console.log(props.status)
    if(status === 'reading') setStatus('haveRead')
    else if(status === 'haveRead') setStatus('willRead')
    else if(status === 'willRead') setStatus('reading')
    console.log(status)
  }
  
  useEffect(() => {
    setStatus(props.status)
  }, props.status)
  return (
    <li
      onClick={toggleOptions}
      className={`${c.li} flex flexSBetween flexColumn smoothEdge whiteBg shadow margin5 pointer`}
    >
      <div className="flex flexSBetween padding5">
        <div>
          <p>
            <b>{props.title || "Title"}</b>
          </p>
          <p>
            <i>
              {Array.isArray(props.author)
                ? props.author.join(", ")
                : props.author || "No author listed"}
            </i>
          </p>
          <ul className={`${c.genres} flex noBulletList darkFont`}>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>
            <small>
              {!props.status === "google" && "Status: "}
              {status === "haveRead" ? (
                <span className="darkFont padding5">Finished</span>
              ) : status === "reading" ? (
                <span className="whiteFont bluegreenBg padding5">Reading</span>
              ) : props.status === "google" ? (
                ""
              ) : (
                <span className="whiteFont darkBg padding5">Will read</span> ||
                ""
              )}
            </small>
          </p>
        </div>
        <div>
          <img
            src={props.image || "optimizedfeather.svg"}
            alt={props.title || ""}
            width={"100px"}
          />
        </div>
      </div>
      {options && (
        <div className={`${c.options} padding5`}>
          <hr />
          <p>
            {props.description || (
              <span>
                Alas, someone was rather busy. Or lazy. Or there was just no
                description listed.
                <br />
                Therefore, no description was provided.
              </span>
            )}
          </p>
          <div
            className={`notTarget ${c.statuses} flex flexSBetween padding5 darkBg`}
          >
            {props.myBooks && (
              <>
                <div className="flex">
                  <button
                    className={`grayFont flex flexCenter noBorder noBg `}
                    style={{ fontSize: "22px" }}
                    title="Done reading?"
                    onClick={changeStatus}
                  >
                    {status === "haveRead" ? (
                      <AiFillCheckCircle className="marginR10" />
                    ) : status === "reading" ? (
                      <MdPending className="marginR10" />
                    ) : (
                      <RiTimer2Line className="marginR10" />
                    )}
                    {status === "haveRead"
                      ? "DONE"
                      : status === "reading"
                      ? "READING"
                      : "toREAD"}
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
                  onClick={addLibraryBook}
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
