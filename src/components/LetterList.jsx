import styled from "styled-components"
import LetterCard from "./LetterCard"
import { v4 as uuidv4 } from 'uuid';

export default function LetterList({ currentCategory, fanLetters }) {
  const filteredLetters = fanLetters.filter(letter => letter.category === currentCategory)

  return <ListWrapper>
    {filteredLetters.length === 0 ? <p>{currentCategory}에게 남겨진 팬레터가 없습니다. </p> : filteredLetters.map((letter) => (<LetterCard key={letter.id} letter={letter} />

    ))}
  </ListWrapper>
}

const ListWrapper = styled.ul`
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 500px;
    border-radius: 12px;
    color: white;
`