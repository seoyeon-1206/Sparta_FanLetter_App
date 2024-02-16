import React from 'react'
import styled from 'styled-components'

const Button = ({ text, onClick = () => { } }) => {
    return (
        <BtnsWrapper>
            <button onClick={onClick}>{text}</button>
        </BtnsWrapper>
    )
}

const BtnsWrapper = styled.div`
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


export default Button