import GlobalStyle from './style/reset';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Error from './pages/Error';
import { useState } from 'react';

const dummyFanLetters = [
  {
    nickName: "joy💓",
    description: "Poyami love you",
    date: Date(),
    category: "Poyami"
  },
  {
    nickName: "joy💓",
    description: "Apple love you",
    date: Date(),
    category: "Apple"
  },
  {
    nickName: "joy💓",
    description: "Yeoul love you",
    date: Date(),
    category: "Yeoul"
  },
]

function App() {
  const [fanLetters, setFanLetters] = useState(dummyFanLetters)

  const handleAddNewLetter = item => {
    setFanLetters([...fanLetters, item])
  }

  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home fanLetters={fanLetters} handleAddNewLetter={handleAddNewLetter}/>} />
      <Route path="/detail/:cardId" element={<Detail/>}/>
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
