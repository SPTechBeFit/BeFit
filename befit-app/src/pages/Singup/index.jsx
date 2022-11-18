import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from 'axios'

const Signup = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  


  const handleSignup = () => {



    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }
    alert("Usuário cadatrado com sucesso!");
    //navigate("/signin");

    axios.post('http://localhost:8080/usuarios',
      { nome: nome, email: email, senha: senha }).then((res) => { console.log(res) });



  };
  return (
    <>
      <Header />
      <C.Container>
        <C.Label>CADASTRO</C.Label>
        <C.Content>
          NOME
          <Input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => [setNome(e.target.value), setError("")]}
          />
          EMAIL
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          CONFIRMA EMAIL
          <Input
            type="email"
            placeholder="Confirme seu E-mail"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
          />
          SENHA
          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <C.labelError>{error}</C.labelError>
          <Button Text="Inscrever-se" onClick={handleSignup} />
          <C.LabelSignin>
            Já tem uma conta?
            <C.Strong>
              <Link to="/signin">&nbsp;Entre</Link>
            </C.Strong>
          </C.LabelSignin>
        </C.Content>
      </C.Container>
      <Footer />
    </>
  );
};

export default Signup;