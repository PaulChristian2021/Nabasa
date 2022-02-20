import React from "react";
import { useState } from "react";
import BookItem from "../BooksList/BookItem/BookItem";

import SearchBar from "../../components/SearchBar/SearchBar";

import c from "./Library.module.css";

const Library = (props) => {
  const [query, setQuery] = useState("");
  console.log(props);

  function searchGoogleBook(e) {
    e.preventDefault();
    if(query.length >= 1) props.getBooksFromGoogle(query);
  }
  return (
    <section className="">
      <SearchBar
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={'Type title...'}
        onFormSubmit={searchGoogleBook}
        className={'padding10 noBorder width100'}
        formClassName={'flex flexCenter width100'}
      ></SearchBar>
      <h1>Find Books</h1>
      <ul className={`${c.ul} flex flexColumn flexCenter noBulletList`}>
        {props.googleBooks.map((b) => (
          <BookItem
            author={b.authors}
            genres={b.categories}
            image={b.imageLinks ? b.imageLinks["smallThumbnail"] : ''}
            description={b.description}
            title={b.title}
            status={"google"}
            key={b.infoLink}
          ></BookItem>
        ))}
      </ul>
    </section>
  );
};

export default Library;
