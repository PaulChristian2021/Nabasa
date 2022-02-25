import React from "react";
import BookItem from "../BookItem/BookItem";
import c from './Booklist.module.css'

const BooksList = (props) => {
    const books = props.books ? props.books : props.googleBooks;
    const img = props.googleBooks ? 'google' : false
    const myBooks = props.googleBooks ? false : true;
    
  return (
    <ul
      className={`${props.className ? props.className : ''} ${c.ul} flex flexColumn flexCenter noBulletList height100 width100 `}
    >
      {books.map((b) => (
        <BookItem
          myBooks={myBooks}
          id={b._id}
          key={props.googleBooks ? b.infoLink : b._id}
          title={b.title}
          author={b.author}
          description={b.description}
          genres={props.googleBooks ? b.categories : b.genres}
          image={img ? b.imageLinks ? b.imageLinks["smallThumbnail"] : '' : b.image}
          status={props.googleBooks ? 'google' : b.status}
        ></BookItem>
      ))}
    </ul>
  );
};

export default BooksList;
