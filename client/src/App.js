import { useState } from 'react';
import './App.css';
import Header from './mainUI/Header/Header'
import BottomNav from './mainUI/BottomNav/BottomNav';

function App() {
  const [books, setBooks] = useState([])

  return (
    <div id="App" className='lightgrayBg'>
      <Header />
      
      <BottomNav />
    </div>
  );
}

export default App;
