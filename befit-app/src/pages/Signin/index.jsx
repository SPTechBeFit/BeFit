import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as C from "./styles";
import { Form } from "./styles";
import Input from "../../components/Input/";
import Button from "../../components/Button/";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header"

function SignIn() {
  let loadPage = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const { register: registerLogin, handleSubmit: handleSubmitLogin } = useForm();


  const navigate = useNavigate();

  const handleLogin = () => {

    axios({
      method: "patch",
      url: `http://localhost:8080/usuarios/login/${email}/${senha}`,
    })
      .then(function (res) {
        if (res.status === 200) {
          sessionStorage.setItem("personId", res.data.personId);
          sessionStorage.setItem("nome", res.data.nome);
          sessionStorage.setItem("email", res.data.email);
          sessionStorage.setItem("autenticado", res.data.logado);
          sessionStorage.setItem("id", res.data.id);

          // loadPage("/usuario/exercicios")
          navigate("/usuario/exercicios")
          // navigate("/sobre")
        }
      })
      .catch(function (error) {
        if (error.response.status === 404) {
          setError("login invalido")
          
        }
        console.error(error.response)
      })

  }
  return (
    <>
      <Form>
        <C.Container>
          <C.Label>SISTEMA DE LOGIN</C.Label>
          <C.Content>
            <Input
              className="input_email"
              type="text"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e)=> { setEmail(e.target.value) }}
              />
            <Input
              className="input_senha"
              type="password"
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e)=> { setSenha(e.target.value) }}


            />
            <C.labelError>{error}</C.labelError>
            <Button onClick={()=> {handleLogin()}} Text="Login"/>
            <C.LabelSignup>
              Não tem uma conta?
              <C.Strong>
                <Link to="/signup">&nbsp;Registre-se</Link>
              </C.Strong>
            </C.LabelSignup>
          </C.Content>
        </C.Container>
      </Form>
    </>
  )


}

export default SignIn;


{/* <BodyLogin>
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
        </BodyLogin> */}