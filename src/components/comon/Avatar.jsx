import React from 'react'
import styled from 'styled-components'
import profile from "assets/profile.png"

export default function Avatar({ scr }) {
    return (
        <AvatarFigure>
            <img src={scr} alt="아바타 이미지" />
        </AvatarFigure>
    )
}
const AvatarFigure = styled.figure`
    width: 50px;
    height: 50px;
    border-radius: 50%; //원으로 만듬
    overflow: hidden; //삐져나온거 가리기
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover; //이미지 꽉 차게
        border-radius: 50%;
    }
` 