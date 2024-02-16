import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from 'components/comon/Avatar';
import Button from 'components/comon/Button';

export default function Detail({ fanLetters, setFanLetters }) {
  let navigate = useNavigate();
  const { id } = useParams();
  const { nickName, description, date, category } = fanLetters.find((item) => item.id === id); //구조분해할당

  const handleDelete = () => {
    const answer = window.confirm('정말로 삭제하시겠습니까?')
    if (!answer) return;
    const newLetters = fanLetters.filter(letter => letter.id !== id)
    navigate('/');
    setFanLetters(newLetters)
  }

  return (
    <>
      <Container>
        <Link to="/">
          <HomeBtn>
            <Button text="홈으로" />
          </HomeBtn>
        </Link>
        <DetailWrapper>
          <UserInfo>
            <AvatarAndNickname>
              <Avatar scr={null} />
              <NickName>{nickName}</NickName>
            </AvatarAndNickname>
            <time>{date}</time>
          </UserInfo>
          <ToMember>
            To: {category}
          </ToMember>
          <Content>{description}</Content>
          <Button text="수정" ></Button>
          <Button text="삭제" onClick={handleDelete}></Button>

        </DetailWrapper>
      </Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const HomeBtn = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`
const DetailWrapper = styled.section`
  background-color: gray;
  color: white;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 700px;
  min-height: 400px;
`

const UserInfo = styled.div`
  display: felx;
  justify-content: space-between;
  align-items: center;
`

const AvatarAndNickname = styled.div`
  display: flex;
  align-items: center;
  gap: 12px
`

const NickName = styled.span`
  font-size: 32px;
`

const ToMember = styled.span`
  font-size: 24px;
`

const Content = styled.p`
  font: 24px;
  line-height: 30px;
  padding: 12px;
  background-color: black;
  border-radius: 12px;
`