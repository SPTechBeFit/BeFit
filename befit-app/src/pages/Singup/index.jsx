import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import ButtonBack from "../../components/ButtonSignUp/buttonBack";
import ButtonNext from "../../components/ButtonSignUp/button"
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from 'axios'
import validator from "validator";


var rota = 'http://3.227.245.71';

const Signup = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorConfEmail, setErrorConfEmail] = useState("");
  const [errorSenha, setErrorSenha] = useState("");
  const [errorNome, setErrorNome] = useState("");
  const navigate = useNavigate();

  


  const handleSignup = () => {

    if(validator.isEmpty(nome)){
      setErrorNome("Nome não pode ser vazio")
      return;
    }

    if(!validator.isAlpha(nome)){
      setErrorNome("Nome não pode conter numeros")
      return;
    }
    
    if(validator.isEmail(email)){
      setErrorEmail("")
    } else {
      setErrorEmail("Email invalido")
      return;
    }

    if(validator.isEmail(emailConf)){
      setErrorConfEmail("")
    } else {
      setErrorConfEmail("Email invalido")
      return;
    }


    if (!email | !emailConf | !senha) {
      setErrorSenha("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setErrorConfEmail("Os e-mails não são iguais");
      return;
    }
    alert("Usuário cadatrado com sucesso!");
    navigate("/signin");

    axios.post(rota+':8080/usuarios',
      { nome: nome, email: email, senha: senha }).then((res) => { console.log(res) });



  };
  return (
    <>
      <Header />
      <C.Container>
     
        <C.Content>
        <C.Label>CADASTRO</C.Label>
        <C.inputText>NOME</C.inputText>
          <Input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => [setNome(e.target.value), setErrorNome("")]}
          />
          <C.labelError>{errorNome}</C.labelError>
          <C.inputText>SEU EMAIL</C.inputText>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setErrorEmail("")]}
          />
          <C.labelError>{errorEmail}</C.labelError>
          <C.inputText>CONFIRMAR EMAIL</C.inputText>
          <Input
            type="email"
            placeholder="Confirme seu E-mail"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setErrorConfEmail("")]}
          />
          <C.labelError>{errorConfEmail}</C.labelError>
          <C.inputText>SENHA</C.inputText>
          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setErrorSenha("")]}
          />
          <C.labelError>{errorSenha}</C.labelError>
          <C.ContainerForButtons>
          <ButtonBack Text="VOLTAR" onClick={  () => navigate(-1)}  />
          <ButtonNext Text="CADASTRAR" onClick={handleSignup} />
          </C.ContainerForButtons>
        </C.Content>
      </C.Container>
      <Footer />
    </>
  );
};

export default Signup;