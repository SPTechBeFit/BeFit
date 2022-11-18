import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import axios from "axios";


const Signin = () => {
  // const { signin } = useAuth();
  const navigate = useNavigate();





  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const [personId, setPersonId] = useState(() => {
    const saved = localStorage.getItem("personId");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("personId", JSON.stringify(personId));
  }, [personId]);


  const handleSignIn = () => {
    axios.patch(`http://localhost:8080/usuarios/login/${email}/${senha}`)
      .then((res) => {
        console.log(res)
        console.log(personId)
        return setPersonId(res.data.personId)


      })

      .catch(err => {
        console.log(err)
        console.log('erro no .patch')
      })

      
  }


  return (
    <>
      <Header />
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
          <Button Text="Entrar" onClick={handleSignIn} />
          <C.LabelSignup>
            Não tem uma conta?
            <C.Strong>
              <Link to="/signup">&nbsp;Registre-se</Link>
            </C.Strong>
          </C.LabelSignup>
        </C.Content>
      </C.Container>
      <Footer />
    </>
  );
};

export default Signin;