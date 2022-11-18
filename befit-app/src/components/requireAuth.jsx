import { Navigate } from 'react-router-dom'

export default function RequireAuth({ children }){

    if(!sessionStorage.getItem("autenticado")){
        return <Navigate to = '/signin'/>
    }
    return children
}
