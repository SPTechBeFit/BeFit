import './assets/css/style.css';
import './assets/css/reset.css';
import './assets/css/sobre.css';
import './components/Footer/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Sobre from '../src/pages/Sobre/Sobre.jsx'
import RoutesApp from "./routes";
import { AuthProvider } from './contexts/auth.js'

function App() {
  return (
    <AuthProvider>
      <RoutesApp>
      </RoutesApp>
    </AuthProvider>


  );
}


export default App;
