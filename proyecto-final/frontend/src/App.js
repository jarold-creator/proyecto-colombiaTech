import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MostrarCliente from './componentes/MostrarCliente';
import AgregarCliente from './componentes/AgregarCliente';

//funcion principal
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/clientes' element={<MostrarCliente />} />
        <Route path='/clientes/agregar' element={<AgregarCliente />} />        
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
