import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 75vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 24px;
  font-weight: 200;
  color: #000000;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

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

// import styled from "styled-components";

// export const BodyLogin = styled.div`
//   background-color: #e9e9e9;
//   height: 100vh;
//   width: 100%;
//   display: flex;
// `;

// export const InputGroup = styled.div`
//   width: 100%;
//   height: 10%;
//   margin-top: 4%;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: end;

//   .mask{
//     border-bottom: 2px solid black;
//   background: transparent;
//   width: 55%;
//   padding: 4px;
//   font-size: 16px;
//   color: black;
//   outline: none;
//   }
// `;
// export const BoxAgroupLogin = styled.div`
//   width: 15%;
//   align-items: end;
// `;

// export const Label = styled.label`
//   align-self: flex-center;
//   font-size: 16px;

//   width: 30%;
//   color: black;
//   font-weight: bold;
// `;

// export const Input = styled.input`
//   border-bottom: 2px solid black;
//   background: transparent;
//   width: 55%;
//   padding: 4px;
//   font-size: 16px;
//   color: black;
//   outline: none;
// `;

// export const IconInput = styled.i`
//   width: 50px;
//   height: 50px;
// `;

// export const Modal = styled.div`
//   height: 100vh;
//   width: 100%;
//   background-color: rgba(0, 0, 0, 0.8);
//   position: absolute;
//   z-index: 10;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const InputGroupsModal = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `;

// export const ButtonGroupsModal = styled.div`
//   display: flex;
//   justify-content: space-around;
//   height: 100%;
//   align-items: flex-end;
//   width: 100%;
//   margin-top: 21px;
// `;

// export const ContainerModal = styled.div`
//   background-color: #fff;
//   height: 99%;
//   width: 39%;
//   border-radius: 0.5rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   .error_validation {
//     color: red;
//     font-size: x-small;
//   }
// `;
// export const ContainerX = styled.div`
//   background-color: #fff;
//   width: 100%;
//   height: 5%;
//   border-radius: 0.5rem;
//   display: flex;
//   justify-content: end;
// `;
// export const Form2 = styled.form`
//   width: 80%;
//   height: 90%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

// export const Xmodal = styled.p`
//   font-weight: bold;
//   height: 40px;
//   width: 40px;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
// `;
// export const Xcontent = styled.p`
//   color: black;
//   width: 30px;
//   border-radius: 50%;
//   height: 30px;
//   font-size: xx-large;
//   margin-left: 6%;
//   margin-top: 17%;
//   &:hover {
//     cursor: pointer;
//   }
// `;

// export const BoxCenterLoginContainer = styled.div`
//   margin-top: 10%;
//   justify-content: center;
//   flex-direction: column;
//   display: flex;
//   align-items: center;
//   height: 30%;
//   width: 100%;
// `;

// export const LeftContainerMainLogin = styled.div`
//   background-color: #f605f2;
//   width: 35%;
//   justify-content: left;
//   border-radius: 0.5rem 0 0 0.5rem;
// `;

// export const RightContainerMainLogin = styled.div`
//   background-color: #f5f5f5;
//   display: flex;
//   width: 65%;
//   justify-content: right;
//   align-items: center;
//   flex-direction: column;
//   border-radius: 0.5rem 0 0 0.5rem;
// `;

export const Form = styled.form`
  display: flex;
  align-self: center;
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

// export const ButtonLogin = styled.button`
//   width: 65%;
//   height: 12%;
//   background-color: #f605f2;
//   border-radius: 10px;
//   margin-top: 20%;
//   color: #ffffff;
//   font-weight: 700;
//   font-size: 20px;
//   &:hover {
//     cursor: pointer;
//   }
// `;

// export const ButtonModalLogin1 = styled.button`
//   width: 150px;
//   height: 50px;
//   background-color: #ffffff;
//   border: 2px solid #ff0000;
//   font-weight: bold;
//   color: #ff0000;
//   font-size: 15px;
//   border-radius: 10px;

//   &:hover {
//     cursor: pointer;
//   }
// `;
// export const ButtonModalLogin2 = styled.button`
//   width: 150px;
//   height: 50px;
//   background-color: #f605f2;
//   font-weight: bold;
//   border: 2px solid #000000;
//   font-size: 15px;
//   color: black;
//   border-radius: 10px;
//   &:hover {
//     cursor: pointer;
//   }
// `;

// export const BoxLastText = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: row;
//   width: 100%;
// `;

// export const ContainerMainLogin = styled.div`
//   background-color: #ffffff;
//   display: flex;
//   margin: auto;
//   width: 65vw;
//   height: 90%;
//   border-radius: 0.5rem;
//   box-sizing: border-box;
//   box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
// `;

// export const BannerLogin = styled.div`
//   height: 100%;
//   width: 50%;
//   background-color: #202124;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
// `;

// export const BoxLogin = styled.div`
//   height: 80%;
//   width: 80%;
//   background-color: #ded5ec;
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   align-items: center;
//   justify-items: center;
//   border-radius: 10px;
// `;

// export const TitleLogin = styled.h1`
//   color: black;
//   font-size: 32px;
//   font-weight: 600;
//   display: inline-block;
// `;

// export const TitleModal = styled.h1`
//   display: flex;
//   width: 100%;
//   height: 40%;
//   justify-content: center;
//   align-items: center;
// `;
// export const TextTitleModal = styled.h1`
//   color: black;
//   font-size: 26px;
//   font-weight: 600;
// `;

// export const SubtitleLogin = styled.h2`
//   margin-top: 7.5%;
//   color: black;
//   font-size: 22px;
// `;
// export const SubtitlePassword = styled.h3`
//   align-self: flex-end;
//   margin-top: 10px;
//   color: black;
// `;

// export const Line = styled.div`
//   background-color: #b4b3b3;
//   height: 1px;
//   width: 100%;
//   margin-top: 5%;
//   margin-bottom: 10%;
// `;

// export const LabelLogin = styled.h3`
//   color: black;
// `;

// export const InputLogin = styled.input`
//   width: 80%;
//   height: 25px;
//   background-color: #f2f2f2;
//   font-weight: 48px;
//   border-radius: 10px;
//   padding: 2px 4px 2px 4px;
//   margin-top: 5px;
//   margin-bottom: 10px;
//   border: 1px solid rgba(0, 0, 0, 0.2);
// `;
// export const SignIn = styled.button`
//   margin-top: 15%;
//   height: 33px;
//   width: 80%;
//   background-color: #f605f2;
//   color: white;
//   border-radius: 10px;
// `;

// export const SubtitleTextRegister = styled.p`
//   color: black;
//   font-size: 16px;
//   margin-top: auto;
// `;

// export const TextRegisterLogin = styled.span`
//   color: blue;
//   font-weight: bold;
//   &:hover {
//     cursor: pointer;
//   }
// `;

// export const ImageLogin = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   #img_login {
//     align-items: center;
//     justify-content: center;
//     height: 46%;
//   }
// `;