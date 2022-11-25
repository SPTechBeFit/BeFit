import './assets/css/style.css';
import './assets/css/reset.css';
import './assets/css/sobre.css';
import './components/Footer/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RoutesApp from "./routes";
import { AuthProvider } from './context/auth.js'
import axios from 'axios'
import ModalImport from './pages/HotSite/components/modalImport';

function App() {

  return (
    // <AuthProvider>
    //   <RoutesApp>
    //     <Routes />
    //   </RoutesApp>
    // </AuthProvider>
    <ModalImport/>

  );
}


export default App;
