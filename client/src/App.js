import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import BooksList from "./pages/BooksList/BooksList";
import SignUpIn from './pages/SignUpIn/SignUpIn'

import Header from "./mainUI/Header/Header";
import BottomNav from "./mainUI/BottomNav/BottomNav";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div id="App" className="lightgrayBg">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<BooksList />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/sign" element={<SignUpIn />} />
        </Routes>
      </BrowserRouter>
      <BottomNav />
    </div>
  );
}

export default App;
