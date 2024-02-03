import React from 'react'
import { useState } from 'react'

export default function Home({fanLetters}) {
  const [currentCategory, setCurrentCategory] = useState("Poyami")
  const handleChangeCategory = newCategory => {
    setCurrentCategory(newCategory)
  }
  return (
    <div> 
      <ul>
        <li>
          <button onClick={() => handleChangeCategory("Poyami")}>Poyami</button>
          <button onClick={() => handleChangeCategory("Apple")}>Apple</button>
          <button onClick={() => handleChangeCategory("Yeoul")}>Yeoul</button>
        </li>
      </ul>
      <ul>
      {
        fanLetters.filter(item => item.category === currentCategory).map(item => {
          return <li>
            <h3>{item.nickName}</h3>
            <p>{item.date}</p>
            <h3>{item.description}</h3>
          </li>
        })
      }
     </ul>
    </div>
  )
}