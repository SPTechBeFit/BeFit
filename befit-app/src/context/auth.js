import { useState, createContext, useContext } from "react"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)
  const [autenticado, setAutenticado] = useState()

  const login = (email, senha, autenticado) => {
    setEmail(sessionStorage.getItem("email"))
    setSenha(sessionStorage.getItem("senha"))
    setAutenticado(sessionStorage.getItem("logado"))
  }

  return <AuthContext.Provider value={(email, senha, autenticado, login)}> { children }</AuthContext.Provider>
}
export const useAuth = () =>{
  return useContext(AuthContext)
}