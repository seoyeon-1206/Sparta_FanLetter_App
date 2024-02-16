import styled from "styled-components"
import profile from "assets/profile.png"
import { useNavigate } from "react-router-dom"
import Avatar from "./comon/Avatar";

export default function LetterCard({ letter }) {
    const navigate = useNavigate();
    const formattedDate = new Date(letter.date).toLocaleDateString("ko", {
        "year": "2-digit",
        "month": "2-digit",
        "day": "2-digit",
        "hour": "2-digit",
        "minute": "2-digit",
        "second": "2-digit"
    })
    return <LetterWrapper onClick={() => {
        navigate(`/detail/${letter.id}`)
        console.log(letter.id)
    }}>
        <UserInfo>
            <Avatar scr={letter.profile} />
            <NickNameAndDate>
                <p>{letter.nickName}</p>
                <time>{formattedDate}</time>

            </NickNameAndDate>
        </UserInfo>
        <Content>
            {letter.description}
        </Content>
    </LetterWrapper>
}

const LetterWrapper = styled.li`
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: white;
    padding: 12px;
    border: 1px solid white;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
            transform: scale(1.02);
    }
`

const UserInfo = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`
const NickNameAndDate = styled.div`
    display: felx;
    flex-direction: column;
    gap: 6px;
`
const Content = styled.p`
    background-color: gray;
    border-radius: 12px;
    padding: 12px;
    margin-left: 62px;
    white-space: nowrap; //줄바꿈 안함
    overflow: hidden;
    text-overflow: ellipsis; 

`