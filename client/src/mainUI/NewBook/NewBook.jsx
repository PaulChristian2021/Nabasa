import React, { useState, useEffect, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";
import c from "./NewBook.module.css";

const NewBook = (props) => {
  const googleBookToNewBook = props.googleBookToNewBook;
  console.log(googleBookToNewBook);
  console.log(props);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");

  const [noTitle, setNoTitle] = useState(false);
  const [noStatus, setNoStatus] = useState(false);

  const readingRef = useRef(null);
  // console.log(readingRef);
  function addBook(e) {
    e.preventDefault();
    title ? setNoTitle(false) : setNoTitle(true);
    status ? setNoStatus(false) : setNoStatus(true);
    if (props.loggedIn && title && status) {
      const genres = genre.split(".");
      props.addNewBook({
        title,
        author,
        description,
        status,
        image,
        genres: genres,
      });
      props.toggleNewBookModal(false);
    }
  }

  function toggleNewBookModal(e) {
    if (e.target.id === "formDivBack") {
      props.toggleNewBookModal();
    }
  }

  useEffect(() => {
    if (googleBookToNewBook) {
      if (googleBookToNewBook.title) setTitle(googleBookToNewBook.title);
      if (googleBookToNewBook.author) setAuthor(googleBookToNewBook.author);
      if (googleBookToNewBook.description)
        setDescription(googleBookToNewBook.description);
      setStatus("willRead");
      if (googleBookToNewBook.image) setImage(googleBookToNewBook.image);
      if (googleBookToNewBook.genres){
        setGenre(googleBookToNewBook.genres.join("."));
      }
      readingRef.current.click();
    }
  }, [googleBookToNewBook]);

  return (
    <div
      id="formDivBack"
      className={`${c.div} vh100 flex flexCenter `}
      onClick={toggleNewBookModal}
    >
      <form onSubmit={addBook} className={`flex flexColumn whiteBg`}>
        <div className="flex flexCenter flexSBetween">
          <p className="font25">Add a book</p>
          <button id="close" className=" noBg noBorder" onClick={()=> props.toggleNewBookModal()}>
            <MdOutlineClose className="font25 darkFont" />
          </button>
        </div>
        <label htmlFor="">
          Title
          {noTitle && <span className="errorFont"> - required</span>}
        </label>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => {
            setNoTitle(false);
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="">Author</label>
        <input
          type="text"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="">Description</label>
        <textarea
          className=" maxWidth100parent"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <span>
          Read Status
          {noStatus && <span className="errorFont"> - required</span>}
        </span>
        <br />
        <div className={`${c.readstatus} flex flexSAround maxWidth400`}>
          <label>
            <input
              id="haveRead"
              type="radio"
              name="readstatus"
              onClick={() => {
                setNoStatus(false);
                setStatus("haveRead");
              }}
            />
            Finished
          </label>
          <label>
            <input
              type="radio"
              name="readstatus"
              onClick={() => {
                setNoStatus(false);
                setStatus("reading");
              }}
            />
            Reading
          </label>
          <label>
            <input
              type="radio"
              name="readstatus"
              ref={readingRef}
              onClick={() => {
                setNoStatus(false);
                setStatus("willRead");
              }}
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
          onChange={(e) => setGenre(e.target.value)}
        />
        <button
          id="formAddButton"
          className={`${c.button} font25 salmonBg whiteFont shadow noBorder padding5`}
        >
          <BiBookAdd />
        </button>
      </form>
    </div>
  );
};

export default NewBook;
