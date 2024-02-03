import React from 'react'
import { useParams } from 'react-router-dom';

export default function Detail({fanLetters}) {
  const param = useParams();
  const letter = fanLetters.find((item) => item.id === param.id);

  return (
    <div>
      <h1>{letter.nickName}</h1>
      <div>{letter.date}</div>
      <h3>{letter.category}에게</h3>
      <p>{letter.description}</p>
    </div>
  )
}
