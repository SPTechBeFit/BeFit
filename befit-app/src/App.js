import './assets/css/style.css';
import './assets/css/reset.css';
import './assets/css/sobre.css';
import './components/Footer/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RoutesApp from "./routes";
import { AuthProvider } from './context/auth.js'

function App() {

  return (
    <AuthProvider>
      <RoutesApp>
        <Routes />
      </RoutesApp>
    </AuthProvider>

  );
}


export default App;
