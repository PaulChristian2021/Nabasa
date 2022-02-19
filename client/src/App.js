import { useEffect, useState } from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
  
  const [books, setBooks] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState('')
  const [toRead, setToRead] = useState(0)
  const [haveRead, setHaveRead] = useState(0)
  const [reading, setReading] = useState(0)

  function getAccountData({ username, password }) {
    setLoading(true);
    const response = fetch("http://localhost:6262/account", {
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
          setUser(username)
          setBooks(data);
          console.log(data)
          setLoggedIn(true);
        }
      });
  }
  function logout(){
    setLoggedIn(false)
    setBooks([])
  }
  function toggleNewBookModal(){
    // if(e.target.tag == '')
    setNewBookModal(!newBookModal)
  }
  
  useEffect(()=>{
    // if(loggedIn){
      const z = books.filter(b=>b.status === 'haveRead')
      console.log(z)
      setHaveRead(z.length)
      const y = books.filter(b=>b.status === 'reading')
      console.log(y)
      setReading(y.length)
      const x = books.filter(b=>b.status === 'willRead')
      console.log(x)
      setToRead(x.length)
    // }
  },[books])

  return (
    <BrowserRouter>
      <div id="App" className="lightgrayBg">
        <Header user={user} toRead={toRead} reading={reading} haveRead={haveRead}/>
        <Routes>
          <Route path="*" element={<BooksList />} />
          <Route
            path="/books"
            element={<BooksList books={books} loggedIn={loggedIn} />}
          />
          <Route path="/library" element={<Library />} />
          <Route
            path="/account"
            element={
              <SignUpIn getAccountData={getAccountData} logout={logout} loggedIn={loggedIn} />
            }
          />
        </Routes>
        <BottomNav toggleNewBookModal={toggleNewBookModal}/>
        {loading && <Loading />}
        {newBookModal && ReactDOM.createPortal(<NewBook toggleNewBookModal={toggleNewBookModal} />, document.querySelector('#root'))}
      </div>
    </BrowserRouter>
  );
}

export default App;
