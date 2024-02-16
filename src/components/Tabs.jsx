import { useState } from "react"
import styled, { css } from "styled-components"

export default function Tabs({currentCategory, setCurrentCategory}) {
    const handleChangeCategory = (event) => {
        if(event.target === event.currentTarget) return; //회색 부분 클릭 시
        setCurrentCategory(event.target.textContent)
      }

    return <TabsWrapper onClick = {handleChangeCategory}>
        <Tab $currentCategory = {currentCategory} >Poyami</Tab>
        <Tab $currentCategory = {currentCategory} >Apple</Tab>
        <Tab $currentCategory = {currentCategory} >Yeoul</Tab>
    </TabsWrapper>
}

const TabsWrapper = styled.ul`
    background-color: gray;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    gap: 12px;
    border-radius: 12px;
`
const Tab = styled.li`
    ${props => {
        if(props.$currentCategory === props.children) {
            return css`
            background-color: yellow;
            color: black;`
        }
        return css`
            background-color: black;
            color: white;
        `
        }
    }

    background-color: black;
    color: white;
    font-size: 20px;
    width: 80px;
    text-align: center;
    padding: 12px 6px;
    border-radius: 12px;
    cursor: pointer; 
`
