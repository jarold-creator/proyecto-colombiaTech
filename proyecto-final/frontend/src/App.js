import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './componentes/Menu';
import Footer from './componentes/Footer';
import RutasPage from './rutas/Routers';


//funcion principal
function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <RutasPage />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
