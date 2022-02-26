import React from "react";
import { useState } from "react";
import BooksList from "../../components/BooksList/BooksList";

import SearchBar from "../../components/SearchBar/SearchBar";

import { GiSpellBook, GiBookStorm } from "react-icons/gi";



const Library = (props) => {
  const [query, setQuery] = useState("");
  

  function searchGoogleBook(e) {
    e.preventDefault();
    if (query.length >= 1) props.getBooksFromGoogle(query);
    setQuery('')
  }
  return (
    <section className="">
      <SearchBar
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={"Find new books"}
        onFormSubmit={searchGoogleBook}
        className={""}
        formClassName={""}
      ></SearchBar>
      <h1 className="darkFont">Search for books</h1>
      {props.googleBooks.length < 1 && (
        <div className="margin15 flex flexColumn flexCenter">
          <GiBookStorm className="blackFont  font70" />
          <h2 className="darkFont">
            Look for <span className="salmonFont">life</span> in their pages
          </h2>
          <GiSpellBook className="blackFont font70" />
          <h2 className="darkFont">
            And pour them into your
            <br /> <span className="salmonFont">heart</span>
          </h2>
          <small className="blackFont margin15">
            For that, do a search above.
          </small>
        </div>
      )}

      <BooksList googleBooks={props.googleBooks} />
    </section>
  );
};

export default Library;
