import React from "react";
import BookItem from "../BookItem/BookItem";

const BooksList = (props) => {
    const books = props.books ? props.books : props.googleBooks;
    const img = props.googleBooks ? 'google' : false
    const myBooks = props.googleBooks ? false : true;
    
  return (
    <ul
      className={`${props.className ? props.className : ''} flex flexColumn flexCenter noBulletList height100 width100 `}
    >
      {books.map((b) => (
        <BookItem
          myBooks={myBooks}
          key={b._id}
          title={b.title}
          author={b.author}
          description={b.description}
          genres={b.genres}
          image={img ? b.imageLinks ? b.imageLinks["smallThumbnail"] : '' : b.image}
          status={props.googleBooks ? 'google' : b.status}
        ></BookItem>
      ))}
    </ul>
  );
};

export default BooksList;
