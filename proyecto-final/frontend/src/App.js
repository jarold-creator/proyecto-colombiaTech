import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MostrarCliente from './componentes/MostrarCliente';
import AgregarCliente from './componentes/AgregarCliente';
import ActualizarCliente from './componentes/ActualizarCliente';
import Menu from './componentes/Menu';

//funcion principal
function App() {
  return (
    <div className="App">
      <Menu />     
      <BrowserRouter>
      <Routes>
        <Route path='/clientes' element={<MostrarCliente />} />
        <Route path='/clientes/agregar' element={<AgregarCliente />} />   
        <Route path='/clientes/actualizar/:id' element={<ActualizarCliente />} />     
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
