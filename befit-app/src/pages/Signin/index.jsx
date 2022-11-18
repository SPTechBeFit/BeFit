// import React, { useState, useEffect } from "react";
// import Input from "../../components/Input";
// import Button from "../../components/Button";
// import * as C from "./styles";
// import { Link, useNavigate } from "react-router-dom";
// // import useAuth from "../../hooks/useAuth";
// import Header from "../../components/Header/Header"
// import Footer from "../../components/Footer/Footer"
// import axios from "axios";


// const Signin = () => {
//   // const { signin } = useAuth();
//   const navigate = useNavigate();





//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
//   const [error, setError] = useState("");

//   const [personId, setPersonId] = useState(() => {
//     const saved = localStorage.getItem("personId");
//     const initialValue = JSON.parse(saved);
//     return initialValue || "";
//   });

//   useEffect(() => {
//     // storing input name
//     localStorage.setItem("personId", JSON.stringify(personId));
//   }, [personId]);


//   const handleSignIn = () => {
//     axios.patch(`http://localhost:8080/usuarios/login/${email}/${senha}`)
//       .then((res) => {
//         console.log(res)
//         console.log(personId)
//         return setPersonId(res.data.personId)


//       })

//       .catch(err => {
//         console.log(err)
//         console.log('erro no .patch')
//       })

      
//   }


//   return (
//     <>
//       <Header />
//       <C.Container>
//         <C.Label>Entre com seu email e senha</C.Label>
//         <C.Content>
//           EMAIL
//           <Input
//             type="email"
//             placeholder="Digite seu E-mail"
//             value={email}
//             onChange={(e) => [setEmail(e.target.value), setError("")]}
//           />
//           SENHA
//           <Input
//             type="password"
//             placeholder="Digite sua Senha"
//             value={senha}
//             onChange={(e) => [setSenha(e.target.value), setError("")]}
//           />
//           <C.labelError>{error}</C.labelError>
//           <Button Text="Entrar" onClick={handleSignIn} />
//           <C.LabelSignup>
//             Não tem uma conta?
//             <C.Strong>
//               <Link to="/signup">&nbsp;Registre-se</Link>
//             </C.Strong>
//           </C.LabelSignup>
//         </C.Content>
//       </C.Container>
//       <Footer />
//     </>
//   );
// };

// export default Signin;

import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  BannerLogin,
  TextTitleModal,
  BodyLogin,
  ContainerModal,
  ContainerX,
  Form2,
  ButtonModalLogin1,
  ButtonModalLogin2,
  ButtonGroupsModal,
  Modal,
  Label,
  Input,
  InputGroupsModal,
  ContainerMainLogin,
  LeftContainerMainLogin,
  RightContainerMainLogin,
  ImageLogin,
  InputGroup,
  TitleModal,
  BoxLastText,
  Xcontent,
  Xmodal,
  BoxCenterLoginContainer,
  SubtitleTextRegister,
  SubtitlePassword,
  TextRegisterLogin,
  ButtonLogin,
  Form,
  IconInput,
  BoxLogin,
  TitleLogin,
  AlignBox,
  SubtitleLogin,
  BoxAgroupLogin,
  Line,
  LabelLogin,
  InputLogin,
  SignIn,
} from "./styles";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

function Login(){
  let loadPage = useNavigate();

  const {register: registerLogin, handleSubmit: handleSubmitLogin} = useForm();


  const loginUsuario = (dadosUsuario) => {
    axios({
      method: "patch",
      url: `http://localhost:8080/usuarios/login/${dadosUsuario.email}/${dadosUsuario.senha}`,
    })
      .then(function (res){
        if (res.status === 200){
          console.log(res)
          sessionStorage.setItem("personId", res.data.personId);
          sessionStorage.setItem("nome", res.data.nome);
          sessionStorage.setItem("email", res.data.email);
          loadPage("/usuario/exercicios")
        }
      })
      .catch(function (error){
        if(error.response.status === 404){
          alert("Login invalido")
        }
        console.error(error.response)
      })
  }
  return (
    <>
    <Header/>
      <BodyLogin>
        <ContainerMainLogin>
          <LeftContainerMainLogin>
          </LeftContainerMainLogin>
          <RightContainerMainLogin>
            <BoxCenterLoginContainer>
              <TitleLogin>Bem vindo de volta</TitleLogin>
              <SubtitleLogin>Faça seu Login</SubtitleLogin>
            </BoxCenterLoginContainer>
            <Form onSubmit={handleSubmitLogin(loginUsuario)}>
              <InputGroup>
                <BoxAgroupLogin>
                  <Label>Email</Label>
                </BoxAgroupLogin>
                <Input
                  className="input_email"
                  type="text"
                  name="email"
                  {...registerLogin("email")}
                ></Input>
              </InputGroup>

              <InputGroup>
                <BoxAgroupLogin>
                  <Label>Senha</Label>
                </BoxAgroupLogin>

                <Input
                  className="input_senha"
                  type="password"
                  name="senha"
                  {...registerLogin("senha")}
                ></Input>
              </InputGroup>
              <ButtonLogin type="submit">Login</ButtonLogin>
            </Form>
          </RightContainerMainLogin>
        </ContainerMainLogin>
        </BodyLogin>
        <Footer/>
      </>
    )

}

export default Login;