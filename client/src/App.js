import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

import BooksList from "./pages/BooksList/BooksList";
import Library from "./pages/Library/Library";
import SignUpIn from "./pages/SignUpIn/SignUpIn";
import Loading from './pages/Loading/Loading'

import Header from "./mainUI/Header/Header";
import BottomNav from "./mainUI/BottomNav/BottomNav";

function App() {
  const [books, setBooks] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)

  async function getAccountData({ username, password }) {
    setLoading(true)
    const response = await fetch("http://localhost:6262/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setBooks(data);
        setLoading(false)
      });
  }

  // getAccountData({ username: "mina", password: "smina" });
  return (
    <div id="App" className="lightgrayBg">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<BooksList />} />
          <Route path="/books" element={<BooksList books={books} loggedIn={loggedIn}/>} />
          <Route path="/library" element={<Library />} />
          <Route path="/account" element={<SignUpIn getAccountData={getAccountData} loggedIn={loggedIn}/>} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
      {loading && <Loading />}
    </div>
  );
}

export default App;
