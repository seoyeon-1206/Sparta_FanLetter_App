import GlobalStyle from './style/reset';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Error from './pages/Error';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const dummyFanLetters = [
  {
    id: uuidv4(),
    nickName: "joy💓",
    description: "Poyami love you",
    date: Date(),
    category: "Poyami"
  },
  {
    id: uuidv4(),
    nickName: "joy💓",
    description: "Apple love you",
    date: Date(),
    category: "Apple"
  },
  {
    id: uuidv4(),
    nickName: "joy💓",
    description: "Yeoul love you",
    date: Date(),
    category: "Yeoul"
  },
]

function App() {
  const [fanLetters, setFanLetters] = useState(dummyFanLetters)

  const handleAddOrUpdateNewLetter = item => {
    console.log(item)
    setFanLetters([...fanLetters, item])
  }

  const handleDeleteLetter = deletedItem => {
    const newLetters = fanLetters.filter(item => item.id != deletedItem.id)
    setFanLetters(newLetters)
  }

  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home fanLetters={fanLetters} handleAddNewLetter={handleAddOrUpdateNewLetter}/>} />
      <Route path="/detail/:id" element={<Detail fanLetters={fanLetters} handleDeleteLetter={handleDeleteLetter} handleUpdateLetters={handleAddOrUpdateNewLetter}/>}/>
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
