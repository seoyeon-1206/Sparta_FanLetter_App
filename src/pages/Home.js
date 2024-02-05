import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ButtonItem, ButtonList, CustomHeader, DesciptionTextArea, FanLetterItem, FanLetterList, FormStyle, FormSubmitButton, FormSubmitButtonBox, NickNameDate, NickNameDescription, NickNameInput, NickNameText, ProfileImage, SectionStyle } from '../style/HomeStyle';

export default function Home({ fanLetters, handleAddNewLetter }) {
  const [currentCategory, setCurrentCategory] = useState("Poyami")
  const [nickName, setNickName] = useState("")
  const [description, setDescription] = useState("")
  const [newCategory, setNewCategory] = useState("Poyami")
  const navigate = useNavigate()

  const onAddNewLetter = () => {
    handleAddNewLetter({
      id: uuidv4(),
      nickName: nickName,
      description: description,
      date: formatDate(new Date()),
      category: newCategory
    })
  }

  const formatDate = (date) => {
    const year = date.getFullYear().toString().slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    const period = hours < 12 ? '오전' : '오후';
    const formattedHours = hours % 12 || 12;

    return `${year}. ${month}. ${day}. ${period} ${formattedHours}:${minutes}:${seconds}`;
  };

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
        <ButtonItem color={`${currentCategory === "Poyami" ? "antiquewhite" : "gray"}`} onClick={() => handleChangeCategory("Poyami")}>Poyami</ButtonItem>
        <ButtonItem color={`${currentCategory === "Apple" ? "antiquewhite" : "gray"}`} onClick={() => handleChangeCategory("Apple")}>Apple</ButtonItem>
        <ButtonItem color={`${currentCategory === "Yeoul" ? "antiquewhite" : "gray"}`} onClick={() => handleChangeCategory("Yeoul")}>Yeoul</ButtonItem>
      </ButtonList>
      <FormStyle>
        <SectionStyle>
          <label>닉네임: &nbsp;</label>
          <NickNameInput onChange={e => setNickName(e.currentTarget.value)} placeholder="최대 20글자까지 작성할 수 있습니다." maxLength="20" value={nickName}></NickNameInput>
        </SectionStyle>
        <SectionStyle>
          <label>내용:&nbsp;</label>
          <DesciptionTextArea onChange={e => setDescription(e.currentTarget.value)} placeholder="최대 100자까지만 작성할 수 있습니다." maxLength="20" value={description}></DesciptionTextArea>
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
          <FormSubmitButton type="button" onClick={() => onAddNewLetter()}>팬레터 등록</FormSubmitButton>
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