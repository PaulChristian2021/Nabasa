import React from "react";
import { useState } from "react";
import BooksList from "../../components/BooksList/BooksList";

import SearchBar from "../../components/SearchBar/SearchBar";

import { GiSpellBook, GiBookStorm } from "react-icons/gi";



const Library = (props) => {
  const [query, setQuery] = useState("");
  console.log(props);

  function searchGoogleBook(e) {
    e.preventDefault();
    if (query.length >= 1) props.getBooksFromGoogle(query);
  }
  return (
    <section className="">
      <SearchBar
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={"Type title..."}
        onFormSubmit={searchGoogleBook}
        className={"padding10 noBorder width100 maxWidth400"}
        formClassName={"flex flexCenter width100"}
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
