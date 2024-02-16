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

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home fanLetters={fanLetters} setFanLetters={setFanLetters} />} />
      <Route path="/detail/:id" element={<Detail fanLetters={fanLetters} setFanLetters={setFanLetters} />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>
}