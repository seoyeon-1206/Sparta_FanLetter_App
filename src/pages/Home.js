import React, { useContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonItem, ButtonList, CustomHeader, FanLetterItem, FanLetterList, FormStyle, FormSubmitButtonBox, NickNameDate, NickNameDescription, NickNameText, ProfileImage, SectionStyle } from '../style/HomeStyle';
import { FanLetterContext } from '../context/FanLetterContext';

export default function Home() {
  const [currentCategory, setCurrentCategory] = useState("Poyami")
  const [nickName, setNickName] = useState("")
  const [description, setDescription] = useState("")
  const [newCategory, setNewCategory] = useState("Poyami")
  const { fanLetters, handleAddNewLetter} = useContext(FanLetterContext);
  const navigate = useNavigate()

  const onAddNewLetter = () => {
    handleAddNewLetter({
      id: uuidv4(),
      nickName: nickName,
      description: description,
      date: Date(),
      category: newCategory
    })
  }

  const handleChangeCategory = newCategory => {
    setCurrentCategory(newCategory)
  }

  const categoryOptions = [
    { key: 1, value: "Poyami" },
    { key: 2, value: "Apple" },
    { key: 3, value: "Yeoul" }
  ]

  return (
    <>
    <CustomHeader/>
    <div>
      <ButtonList>
        <ButtonItem color={`${currentCategory === "Poyami" ? "yellow" : "gray"}`} onClick={() => handleChangeCategory("Poyami")}>Poyami</ButtonItem>
        <ButtonItem color={`${currentCategory === "Apple" ? "yellow" : "gray"}`} onClick={() => handleChangeCategory("Apple")}>Apple</ButtonItem>
        <ButtonItem color={`${currentCategory === "Yeoul" ? "yellow" : "gray"}`} onClick={() => handleChangeCategory("Yeoul")}>Yeoul</ButtonItem>
      </ButtonList>
      <FormStyle>
        <SectionStyle>
          <label>닉네임: &nbsp;</label>
          <input onChange={e => setNickName(e.currentTarget.value)} placeholder="최대 20글자까지 작성할 수 있습니다." maxlength="20" value={nickName}></input>
        </SectionStyle>
        <SectionStyle>
          <label>내용:&nbsp;</label>
          <textarea onChange={e => setDescription(e.currentTarget.value)} placeholder="최대 100자까지만 작성할 수 있습니다." maxlength="20" value={description}></textarea>
        </SectionStyle>
        <SectionStyle>
          <label>누구에게 보내실 건가요?: &nbsp;</label>
          <select onChange={e => setNewCategory(e.currentTarget.value)} value={newCategory}>
            {categoryOptions.map((item, index) => (
              <option key={item.key} value={item.value}>{item.value}</option>
            ))}
          </select>
        </SectionStyle>
        <FormSubmitButtonBox>
          <button type="button" onClick={() => onAddNewLetter()}>팬레터 등록</button>
        </FormSubmitButtonBox>
      </FormStyle>
      <FanLetterList>
        {
          fanLetters.filter(item => item.category === currentCategory).map(item => {
            return <FanLetterItem onClick={() => navigate(`/detail/${item.id}`)}>
                <ProfileImage/>
                <div> 
                  <NickNameText>{item.nickName}</NickNameText>
                  <NickNameDate>{item.date}</NickNameDate>
                  <NickNameDescription>{item.description}</NickNameDescription>
                </div>
              </FanLetterItem>
          })
        }
      </FanLetterList>
    </div>
    </>
  )
}