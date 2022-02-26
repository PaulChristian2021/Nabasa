import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { IoLibrarySharp } from "react-icons/io5";
import c from "./MyLibrary.module.css";
import BooksList from "../../components/BooksList/BooksList";
import SearchBar from "../../components/SearchBar/SearchBar";

const MyLibrary = (props) => {
  const [inputVal, setInputVal] = useState("");
  const books = props.books ? props.books : [];
  const [filterBooks, setFilterBooks] = useState([]);

  function searchBooks(e) {
    setInputVal(e.target.value);
    const searched = books.filter((b) =>
      b.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterBooks(searched);
  }
  function submitForm(e) {
    e.preventDefault();
    setInputVal("");
    setFilterBooks(books);
  }

  useEffect(() => {
    if (books) setFilterBooks(books);
  }, []);

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
          <SearchBar
            type="search"
            value={inputVal}
            onChange={searchBooks}
            onFormSubmit={submitForm}
            placeholder={"Search your shelf"}
            className={""}
            formClassName={""}
          ></SearchBar>
          <h1 className="darkFont">Your Books</h1>
          <BooksList books={filterBooks} />
        </>
      )}
    </section>
  );
};

export default MyLibrary;
