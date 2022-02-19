import React, { useState } from "react";

import { BiBookAdd } from "react-icons/bi";
import c from "./NewBook.module.css";

const NewBook = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [readstatus, setReadstatus] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");

  function addBook(e) {
    e.preventDefault();
    console.log(title, author, description, readstatus, image, genre);
  }
  function getGenre(value) {
    const genre = value.split(".");
    setGenre(genre);
  }

  function toggleNewBookModal(e) {
    if (e.target.id == "formDivBack" || e.target.id == "formAddButton" ) {
      props.toggleNewBookModal();
    }
  }

  return (
    <div
      id="formDivBack"
      className={`${c.div} flex flexCenter `}
      onClick={toggleNewBookModal}
    >
      <form onSubmit={addBook} className={`flex flexColumn whiteBg `}>
        <p className="font25">Add a book</p>
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Author</label>
        <input
          type="text"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="">Description</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <span>Read Status</span>
        <br />
        <div className={`${c.readstatus} flex flexSAround`}>
          <label>
            <input
              type="radio"
              name="readstatus"
              onClick={() => setReadstatus("haveRead")}
            />
            Finished
          </label>
          <label>
            <input
              type="radio"
              name="readstatus"
              onClick={() => setReadstatus("reading")}
            />
            Reading
          </label>
          <label>
            <input
              type="radio"
              name="readstatus"
              onClick={() => setReadstatus("toRead")}
            />
            To Read
          </label>
        </div>
        <label htmlFor="">Image</label>
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="">
          Genre (<small>separated by period</small>)
        </label>
        <input
          type="text"
          placeholder="Ex: drama.comedy.tragedy"
          value={genre}
          onChange={(e) => getGenre(e.target.value)}
        />
        <button id="formAddButton"
          className={`${c.button} font25 salmonBg whiteFont shadow noBorder padding5`}
        >
          <BiBookAdd />
        </button>
      </form>
    </div>
  );
};

export default NewBook;
