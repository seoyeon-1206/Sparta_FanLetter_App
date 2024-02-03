import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

export default function Detail({ fanLetters, handleDeleteLetter,handleUpdateLetters }) {
  const [isEdit, setIsEdit] = useState(false)
  const [editedDescription, setEditedDescription] = useState("")
  let navigate = useNavigate();
  const param = useParams();
  const letter = fanLetters.find((item) => item.id === param.id);

  const handleDelete = () => {
    handleDeleteLetter(letter)
  }

  const handleEditFinished = () => {
    handleUpdateLetters({
      nickName: letter.nickName,
      description: editedDescription,
      date: letter.date,
      category: letter.category
    })
    setIsEdit(false)
    navigate('/')
  }

  return (
    <>
      <div>
        {
          isEdit ?
            <>
              <div>
                <h1>{letter.nickName}</h1>
                <div>{letter.date}</div>
                <h3>{letter.category}에게</h3>
                <input onChange={e => setEditedDescription(e.currentTarget.value)} placeholder="최대 100자까지만 작성할 수 있습니다." maxlength="20" value={editedDescription}></input>
              </div>
              <div>
                <button onClick={() => handleEditFinished()}>수정완료</button>
              </div>
            </>
            :
            <>
              <div>
                <h1>{letter.nickName}</h1>
                <div>{letter.date}</div>
                <h3>{letter.category}에게</h3>
                <p>{letter.description}</p>
              </div>
              <div>
                <button onClick={() => handleDelete()}>삭제</button>
                <button onClick={() => {
                  setEditedDescription(letter.description)
                  setIsEdit(true)
                }}>수정</button>
              </div>
            </>
        }
      </div>
    </>
  )
}
