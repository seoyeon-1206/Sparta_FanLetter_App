import styled from "styled-components";
import Tabs from "./Tabs";

export default function Header({currentCategory, setCurrentCategory}) {
    return <Container>
        <Title>모동숲 팬레터함</Title>
        <Tabs currentCategory = {currentCategory} setCurrentCategory={setCurrentCategory}/>
    </Container>
}

const Container = styled.section`
    width: 100%;
    height: 300px;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`

const Title = styled.h1`
    font-size: 36px;
    font-weight: 700;
    color: yellow;
    flex: 1;
    display: flex;
    align-items: center;
`