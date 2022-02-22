import React from "react";
import { Link } from "react-router-dom";


import { IoLibrarySharp } from "react-icons/io5";
import c from "./MyLibrary.module.css";
import BooksList from "../../components/BooksList/BooksList";
const MyLibrary = (props) => {
  console.log(props.books);
  return (
    <section className={`${c.section}  height100 width100`}>
      {!props.loggedIn && (
        <div
          className="flex flexCenter flexColumn  height100 width100"
          style={{ height: "80vh" }}
        >
          <IoLibrarySharp className="font70 darkFont" />
          <p className="darkFont">Login to see your books.</p>
          <Link
            to="/account"
            className={`${c.letsGo} bluegreenBg whiteFont font25 noUnderline smoothEdge shadow noBorder padding10 margin15`}
          >
            Let's Go
          </Link>
        </div>
      )}
      {props.loggedIn && (
        <>
          <h1 className="darkFont">Your Books</h1>
          <BooksList books={props.books} />
        </>
      )}
    </section>
  );
};

export default MyLibrary;
