import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { NickNameDate, NickNameDescription, NickNameText, ProfileImage } from '../style/HomeStyle';
import { BottomButtonStyle, EditButtons, FanLetterDetail } from '../style/DetailStyle';
import { FanLetterContext } from '../context/FanLetterContext';

export default function Detail() {
  const [isEdit, setIsEdit] = useState(false)
  const [editedDescription, setEditedDescription] = useState("")
  const { fanLetters, handleDeleteLetter, handleUpdateLetter } = useContext(FanLetterContext);

  let navigate = useNavigate();
  const param = useParams();
  const letter = fanLetters.find((item) => item.id === param.id);

  const handleDelete = () => {
    handleDeleteLetter(letter.id)
    navigate('/')
  }

  const handleEditFinished = () => {
    handleUpdateLetter({
      id: letter.id,
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
              <FanLetterDetail>
                <ProfileImage/>
                <div>
                  <NickNameText>{letter.nickName}</NickNameText>
                  <NickNameDate>{letter.date}</NickNameDate>
                  <h3>{letter.category}에게</h3>
                  <textarea onChange={e => setEditedDescription(e.currentTarget.value)} placeholder="최대 100자까지만 작성할 수 있습니다." maxlength="20" value={editedDescription}></textarea>
                  <EditButtons>
                    <BottomButtonStyle onClick={() => handleEditFinished()}>수정완료</BottomButtonStyle>
                  </EditButtons>
                </div>
              </FanLetterDetail>
            </>
            :
            <>
              <FanLetterDetail>
                <ProfileImage />
                <div>
                  <NickNameText>{letter.nickName}</NickNameText>
                  <NickNameDate>{letter.date}</NickNameDate>
                  <h3>{letter.category}에게</h3>
                  <NickNameDescription>{letter.description}</NickNameDescription>
                  <EditButtons>
                    <BottomButtonStyle onClick={() => handleDelete()}>삭제</BottomButtonStyle>
                    <BottomButtonStyle onClick={() => {
                      setEditedDescription(letter.description)
                      setIsEdit(true)
                    }}>수정</BottomButtonStyle>
                  </EditButtons>
                </div>
              </FanLetterDetail>
            </>
        }
      </div>
    </>
  )
}
