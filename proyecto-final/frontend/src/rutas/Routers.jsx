import { Route, Routes } from 'react-router-dom';
import MostrarCliente from '../componentes/MostrarCliente';
import AgregarCliente from '../componentes/AgregarCliente';
import ActualizarCliente from '../componentes/ActualizarCliente';
import Inicio from '../componentes/Inicio';


const RutasPage = () => {
  return (
    <Routes>
      <Route path='/clientes' element={<MostrarCliente />} />
      <Route path='/clientes/inicio' element={<Inicio />}/>
      <Route path='/clientes/agregar' element={<AgregarCliente />} />
      <Route path='/clientes/actualizar/:id' element={<ActualizarCliente />} />
    </Routes>
  )
};

export default RutasPage;