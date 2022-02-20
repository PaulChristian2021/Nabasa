import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

import BooksList from "./pages/BooksList/BooksList";
import Library from "./pages/Library/Library";
import SignUpIn from "./pages/SignUpIn/SignUpIn";
import Loading from "./pages/Loading/Loading";

import Header from "./mainUI/Header/Header";
import NewBook from "./mainUI/NewBook/NewBook";
import BottomNav from "./mainUI/BottomNav/BottomNav";

function App() {
  const [newBookModal, setNewBookModal] = useState(false);

  const [googleBooks, setGoogleBooks] = useState([]);

  const [books, setBooks] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState("");
  const [toRead, setToRead] = useState(0);
  const [haveRead, setHaveRead] = useState(0);
  const [reading, setReading] = useState(0);

  function getAccountData({ username, password }) {
    setLoading(true);
    const response = fetch("https://nabasa-mern.herokuapp.com/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.message) {
          console.log(data.message);
        } else if (Array.isArray(data)) {
          setUser(username);
          setBooks(data);
          console.log(data);
          setLoggedIn(true);
        }
      });
  }
  function updateBooksToDB(latestbooks) {
    console.log(latestbooks);
    fetch("http://localhost:6262/account/updateBooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(latestbooks),
    }).then((res) => res.json());
  }
  function logout() {
    setLoggedIn(false);
    setBooks([]);
  }
  function toggleNewBookModal() {
    // if(e.target.tag == '')
    setNewBookModal(!newBookModal);
  }
  function addNewBook(book) {
    const newBook = { ...book, _id: String(Math.random() * 9999999999) };
    setBooks((state) => {
      updateBooksToDB([...state, newBook]);
      return [...state, newBook];
    });
  }

  useEffect(() => {
    // updates the head counters
    const z = books.filter((b) => b.status === "haveRead");
    setHaveRead(z.length);
    const y = books.filter((b) => b.status === "reading");
    setReading(y.length);
    const x = books.filter((b) => b.status === "willRead");
    setToRead(x.length);
  }, [books]);
  useEffect(() => {
    //localStorage
    console.log(books);
  }, [books]);

  function getBooksFromGoogle(query) {
    //get books from google books API
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const resBooks = []
        res.items.forEach((b) => resBooks.push(b.volumeInfo));
        console.log(resBooks);
        setGoogleBooks(resBooks)
      });
  }

  return (
    <BrowserRouter>
      <div id="App" className="vh100 lightgrayBg">
        <Header
          user={user}
          toRead={toRead}
          reading={reading}
          haveRead={haveRead}
        />
        <Routes>
          <Route path="*" element={<BooksList />} />
          <Route
            path="/books"
            element={<BooksList books={books} loggedIn={loggedIn} />}
          />
          <Route
            path="/library"
            element={
              <Library
                getBooksFromGoogle={getBooksFromGoogle}
                googleBooks={googleBooks}
              />
            }
          />
          <Route
            path="/account"
            element={
              <SignUpIn
                getAccountData={getAccountData}
                logout={logout}
                loggedIn={loggedIn}
              />
            }
          />
        </Routes>
        <BottomNav toggleNewBookModal={toggleNewBookModal} />
        {loading && <Loading />}
        {newBookModal &&
          ReactDOM.createPortal(
            <NewBook
              loggedIn={loggedIn}
              toggleNewBookModal={toggleNewBookModal}
              addNewBook={addNewBook}
            />,
            document.querySelector("#root")
          )}
      </div>
    </BrowserRouter>
  );
}

export default App;
