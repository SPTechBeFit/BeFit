import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 75vh;
  background-color: #D9D9D9;
  font-family: overpass;
  
`;


export const ContainerForButtons = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`


export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30vw;
    box-shadow: 0 1px 2px #0003;
    background-color: white;
    max-width: 430px;
    padding: 20px;
    border-radius: 5px;
    font-weight: bold;
    margin-top: 80px;
`;

export const Label = styled.label`
  font-size: 24px;
  font-weight: 200;
  color: #000000;
  margin: 2vh 0px 3vh 0px;
`;

export const inputText = styled.label`
      display: flex;
      width: 80%;
    flex-direction: column;
    align-items: flex-start;
`



export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
`;



export const Form = styled.form`
  display: flex;
  align-self: center;
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #D9D9D9;
  font-family: overpass;
`;

