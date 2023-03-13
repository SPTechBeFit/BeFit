import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as C from "./styles";
import { Form } from "./styles";
import Input from "../../components/Input/";
import Button from "../../components/Button/";
import ButtonSignUp from "../../components/ButtonSignUp/";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import validator from "validator";

var rota = 'http://34.232.149.218';

function SignIn() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorSenha, setErrorSenha] = useState("");

  const { register: registerLogin, handleSubmit: handleSubmitLogin } = useForm();


  const navigate = useNavigate();

  const handleLogin = () => {

    if (validator.isEmpty(email)) {
      setErrorEmail("Email é obrigatorio")
      return;
    }

    if (validator.isEmail(email)) {
      setErrorEmail("")
    } else {
      setErrorEmail("Email invalido")
      return;
    }

    if (validator.isEmpty(senha)) {
      setErrorSenha("Senha é obrigatorio")
    } else {
      setErrorSenha("")
    }

    axios({
      method: "patch",
      url: `${rota}:8080/usuarios/login/${email}/${senha}`,
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
        }
      })
      .catch(function (error) {
        if (error.response.status === 404) {
          setErrorSenha("login invalido")

        }
        console.error(error.response)
      })


  }
  return (
    <>
    <Header/>
      <Form>
        <C.Container>

          <C.Content>

            <C.Label>Entre com seu email e senha</C.Label>
            <C.inputText>EMAIL</C.inputText>
            <Input
              className="input_email"
              type="text"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
            <C.labelError>{errorEmail}</C.labelError>

            <C.inputText>SENHA</C.inputText>
            <Input
              className="input_senha"
              type="password"
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e) => { setSenha(e.target.value) }}

            />
            <C.labelError>{errorSenha}</C.labelError>
            <Button onClick={() => handleLogin() } Text="ENTRAR" />
            <ButtonSignUp Text="PRIMEIRO ACESSO" onClick={ () => navigate('/signup')}  />

          </C.Content>
        </C.Container>
      </Form>
      <Footer />
    </>
  )


}

export default SignIn;

