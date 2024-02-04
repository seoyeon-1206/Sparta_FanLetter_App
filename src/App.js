import GlobalStyle from './style/reset';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Error from './pages/Error';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

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

  const handleAddNewLetter = item => {
    setFanLetters([...fanLetters, item])
  }
  const handleUpdateLetter = updatedItem => {
    const newLetterList =  fanLetters.map(item => {
      if (item.id == updatedItem.id) {
        return updatedItem
      } else {
        return item
      }
    })
    setFanLetters(newLetterList)
  }

  const handleDeleteLetter = deletedId => {
    const newLetters = fanLetters.filter(item => item.id != deletedId)
    setFanLetters(newLetters)
  }

  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home fanLetters={fanLetters} handleAddNewLetter={handleAddNewLetter}/>} />
      <Route path="/detail/:id" element={<Detail fanLetters={fanLetters} handleDeleteLetter={handleDeleteLetter} handleUpdateLetters={handleUpdateLetter}/>}/>
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
