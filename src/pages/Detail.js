import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Detail({fanLetters, handleDeleteLetter}) {
  const navigate = useNavigate();
  const param = useParams();
  const letter = fanLetters.find((item) => item.id === param.id);

  const handleDelete = () => {
    handleDeleteLetter(letter)
    navigate('/')
  }

  return (
    <>
    <div>
      <h1>{letter.nickName}</h1>
      <div>{letter.date}</div>
      <h3>{letter.category}에게</h3>
      <p>{letter.description}</p>
    </div>
    <div>
      <button onClick={() => handleDelete()}>삭제</button>
    </div>
    </>
  )
}
