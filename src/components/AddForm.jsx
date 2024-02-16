import styled from "styled-components"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function AddFrom({ setFanLetters }) {
  const [nickName, setNickName] = useState("")
  const [description, setDescription] = useState("")
  const [newCategory, setNewCategory] = useState("Poyami")

  const onAddNewLetter = (event) => {
    if (event) {
      event.preventDefault(); // 폼 제출 기본 동작 방지
    }
    if (!nickName || !description) return alert("입력해주세요");

    const newLetter = {
      id: uuidv4(),
      nickName,
      description,
      date: Date(),
      category: newCategory
    }
    setFanLetters(prev => [newLetter, ...prev])
    setNickName("")
    setDescription("")
    console.log(newLetter.id)
  };

  const categoryOptions = [
    { key: 1, value: "Poyami" },
    { key: 2, value: "Apple" },
    { key: 3, value: "Yeoul" }
  ]

  return (
    <>
      <Form onSubmit={onAddNewLetter}>
        <InputWrapper>
          <label>닉네임:</label>
          <input
            onChange={event => setNickName(event.target.value)}
            value={nickName} //제출 후 비워둘 수 있도록
            placeholder="최대 20글자까지 작성할 수 있습니다."
            maxLength={20} />
        </InputWrapper>
        <InputWrapper>
          <label>내용:</label>
          <textarea
            onChange={event => setDescription(event.target.value)}
            value={description}
            placeholder="최대 100글자까지 작성할 수 있습니다."
            maxLength={100} />
        </InputWrapper>
        <SelectWrapper>
          <label>누구에게 보내실 건가요?</label>
          <select onChange={(event) => setNewCategory(event.target.value)}
            value={newCategory}>
            {categoryOptions.map((item, index) => (
              <option key={item.key} value={item.value}>{item.value}</option>
            ))}
          </select>
        </SelectWrapper>
        <ButtonWrapper>
          <button type="submit">팬레터 등록</button>
        </ButtonWrapper>
      </Form>
    </>

  )

}
const Form = styled.form`
  background-color: antiquewhite;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 500px;
  border-radius: 12px;
  margin: 20px
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; //세로 정렬 가운데 정렬로
  gap: 12px;
  & label{
    width: 80px;
  }
  & input, textarea {
    width: 100%;
    padding: 12px;
  }
  & textarea {
    resize: none;
    height: 80px;
  }
`
const SelectWrapper = styled(InputWrapper)` //inputwrapper을 상속해서 덮어씌우기
  justify-content: flex-start;
  & label {
    width: 170px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & button {
    background-color: black;
    color: white;
    font-size: 16px;
    padding: 6px 12px;
    cursor: pointer;
  }
`

export const FormStyle = styled.form`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const SectionStyle = styled.section`
  display: felx;
  flex-direction: row;
  padding: 20px;
  font-size: 22px;
`

export const NickNameInput = styled.input`
 width: 100%;
`

export const DesciptionTextArea = styled.textarea`
  width: 100%;
  height: 100px;
`

export const FormSubmitButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`

export const FormSubmitButton = styled.button`
  border: 2px solid black;
  background: white ; 
  box-shadow:none; 
  border-radius:0; 
  padding:5px; 
  overflow:visible; 
  cursor:pointer;
  font-size: 16px;
`