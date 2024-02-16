import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import Header from 'components/Header';
import LetterList from 'components/LetterList';
import AddFrom from 'components/AddForm';

export default function Home({ fanLetters, setFanLetters }) {

  const [currentCategory, setCurrentCategory] = useState("Poyami")

  return (
    <>
      <Header currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
      <AddFrom setFanLetters={setFanLetters} />
      <LetterList fanLetters={fanLetters} currentCategory={currentCategory} />
    </>
  )
}