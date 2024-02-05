import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Home from 'pages/Home';
import Detail from 'pages/Detail';

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

export default function Router() {

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

    return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home fanLetters={fanLetters} handleAddNewLetter={handleAddNewLetter}/>} />
      <Route path="/detail/:id" element={<Detail fanLetters={fanLetters} handleDeleteLetter={handleDeleteLetter} handleUpdateLetters={handleUpdateLetter}/>}/>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
    </BrowserRouter>
}