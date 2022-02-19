import React from "react";
import BookItem from "./BookItem/BookItem";

import { IoLibrarySharp } from "react-icons/io5";
import c from "./BooksList.module.css";
const BooksList = (props) => {
  console.log(props.books);
  return (
    <section className="">
      {!props.loggedIn && (
        <div className="flex flexCenter flexColumn"  style={{ height: "400px" }}>
          <IoLibrarySharp className="font70 darkFont" />
          <p className="darkFont">Login to see your books.</p>
        </div>
      )}
      {props.loggedIn && (
        <ul className={`${c.ul} flex flexColumn flexCenter noBulletList`}>
          {props.books.map((b) => (
            <BookItem
              myBooks={true}
              key={b._id}
              title={b.title}
              author={b.author}
              description={b.description}
              genres={b.genres}
              image={b.image}
              status={b.status}
            ></BookItem>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BooksList;
