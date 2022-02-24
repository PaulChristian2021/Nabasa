import { useEffect, useState, createContext } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  // useNavigate,
  // useLocation,
} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

import MyLibrary from "./pages/MyLibrary/MyLibrary";
import Library from "./pages/Library/Library";
import Feat from './pages/Feat/Feat.jsx'
import SignUpIn from "./pages/SignUpIn/SignUpIn";
import Loading from "./pages/Loading/Loading";

import Header from "./mainUI/Header/Header";
import NewBook from "./mainUI/NewBook/NewBook";
import BottomNav from "./mainUI/BottomNav/BottomNav";

export const NewBookModalContext = createContext();

function App() {
  const [newBookModal, setNewBookModal] = useState(false);

  const [googleBooks, setGoogleBooks] = useState([]);
  const [googleBookToNewBook, setGoogleBookToNewBook] = useState()

  const [books, setBooks] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [goToBooksAfterLogin, setGoToBooksAfterLogin] = useState(false);

  const [user, setUser] = useState("");
  const [toRead, setToRead] = useState(0);
  const [haveRead, setHaveRead] = useState(0);
  const [reading, setReading] = useState(0);

  function getAccountData({ username, password }) {
    setLoading(true);
    fetch("https://nabasa-mern.herokuapp.com/account", {
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
        } else if (Array.isArray(data)) {
          setUser(username);
          setBooks(data);

          setLoggedIn(true);
        }
      });
  }
  function updateBooksToDB(latestbooks) {
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
    setUser("");
  }
  function toggleNewBookModal(val) {
    setGoogleBookToNewBook(null)
    setNewBookModal(!!val ? val : !newBookModal);

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
  }, [books]);

  function getBooksFromGoogle(query) {
    //get books from google books API
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        const resBooks = [];
        res.items.forEach((b) => resBooks.push(b.volumeInfo));

        setGoogleBooks(resBooks);
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
        <NewBookModalContext.Provider value={{ newBookModal, setNewBookModal, setGoogleBookToNewBook }}>
          <Routes>
            <Route path="*" element={<MyLibrary />} />
            <Route
              path="/books"
              element={<MyLibrary books={books} loggedIn={loggedIn} />}
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
            <Route path='/c' element={<Feat />} />
            <Route
              path="/account"
              element={
                <SignUpIn
                  getAccountData={getAccountData}
                  logout={logout}
                  loggedIn={loggedIn}
                  goToBooksAfterLogin={goToBooksAfterLogin}
                  setGoToBooksAfterLogin={setGoToBooksAfterLogin}
                />
              }
            />
          </Routes>
        </NewBookModalContext.Provider>
        <BottomNav toggleNewBookModal={toggleNewBookModal} />
        {loading && <Loading />}
        {newBookModal &&
          ReactDOM.createPortal(
            <NewBook
              loggedIn={loggedIn}
              toggleNewBookModal={toggleNewBookModal}
              addNewBook={addNewBook}
              googleBookToNewBook={googleBookToNewBook}
            />,
            document.querySelector("#root")
          )}
      </div>
    </BrowserRouter>
  );
}

export default App;
