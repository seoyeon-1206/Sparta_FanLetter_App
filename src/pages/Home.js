import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home({ fanLetters, handleAddNewLetter }) {
  const [currentCategory, setCurrentCategory] = useState("Poyami")
  const [nickName, setNickName] = useState("")
  const [description, setDescription] = useState("")
  const [newCategory, setNewCategory] = useState("Poyami")

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
    <div>
      <ul>
        <li>
          <button onClick={() => handleChangeCategory("Poyami")}>Poyami</button>
          <button onClick={() => handleChangeCategory("Apple")}>Apple</button>
          <button onClick={() => handleChangeCategory("Yeoul")}>Yeoul</button>
        </li>
      </ul>
      <form>
        <section>
          <label>닉네임: &nbsp;</label>
          <input onChange={e => setNickName(e.currentTarget.value)} placeholder="최대 20글자까지 작성할 수 있습니다." maxlength="20" value={nickName}></input>
        </section>
        <section>
          <label>내용:&nbsp;</label>
          <input onChange={e => setDescription(e.currentTarget.value)} placeholder="최대 100자까지만 작성할 수 있습니다." maxlength="20" value={description}></input>
        </section>
        <section>
          <label>누구에게 보내실 건가요?: &nbsp;</label>
          <select onChange={e => setNewCategory(e.currentTarget.value)} value={newCategory}>
            {categoryOptions.map((item, index) => (
              <option key={item.key} value={item.value}>{item.value}</option>
            ))}
          </select>
        </section>
        <div>
          <button type="button" onClick={() => onAddNewLetter()}>팬레터 등록</button>
        </div>
      </form>
      <ul>
        {
          fanLetters.filter(item => item.category === currentCategory).map(item => {
            return <Link to={`/detail/${item.id}`}>
              <li>
                <h3>{item.nickName}</h3>
                <p>{item.date}</p>
                <h3>{item.description}</h3>
              </li>
            </Link>
          })
        }
      </ul>
    </div>
  )
}