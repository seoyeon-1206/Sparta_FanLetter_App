import GlobalStyle from './style/reset';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Error from './pages/Error';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const customHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  background-image: url(https://store.nintendo.co.kr/media/catalog/product/cache/8e3c84988db1fdb90470f4d01453d879/f/1/f1715bebde9ecc2e1cecc33e35166cbf87233ae35cc4dd6649645acc3a036696.jpg);
`

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
