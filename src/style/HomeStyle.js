import styled from "styled-components";

export const CustomHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-image: url(./images/cover.png);
  background-repeat: no-repeat;
  background-size: cover;
`

export const ButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 500px;
  margin: 0 auto;
`
export const ButtonItem = styled.button`
  width: 200px;
  height: 100px;
  background: inherit ; 
  border:none; 
  box-shadow:none; 
  border-radius:0; 
  padding:0; 
  overflow:visible; 
  cursor:pointer;
  background-color: ${(props) => props.color};
  flex-grow: 1;
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
  padding: 20px;
`

export const FormSubmitButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const FanLetterList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`

export const FanLetterItem = styled.li`
  width: 440px;
  height: 100px;
  margin: 20px auto;
  display: flex;
  background-color: antiquewhite;
  padding: 30px;
  border-radius: 20px;
  cursor: pointer;
  transform: scale(1);
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`

export const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  background-image: url(./images/profile.png);
  background-repeat: no-repeat;
  background-size: cover;
`

export const NickNameText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`
export const NickNameDate = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
`
export const NickNameDescription = styled.div`
  font-size: 16px;
`