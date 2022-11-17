import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import api from "../../services/api"

const Signin = () => {
  // const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const login = {
      email, 
      senha,
  }

  function Entrar(){
    api.post("localhost:8080/usuarios/login", login)  
  }

  

  return (
    <>
    <Header/>
    <C.Container>  
      <C.Label>Entre com seu email e senha</C.Label>
      <C.Content>
        EMAIL
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        SENHA
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar"  />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
    <Footer/>
    </>
  );
};

export default Signin;