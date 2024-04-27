import { Route, Routes } from 'react-router-dom';
import MostrarCliente from '../componentes/MostrarCliente';
import AgregarCliente from '../componentes/AgregarCliente';
import ActualizarCliente from '../componentes/ActualizarCliente';
import Inicio from '../componentes/Inicio';
import FormLogin from '../componentes/Form-login';


const RutasPage = ({ showFooter }) => {
  return (
    <Routes>
      <Route path='/' element={<FormLogin />} />
      <Route path='/clientes' element={<MostrarCliente />} />
      <Route path='/clientes/inicio' element={<Inicio />}/>
      <Route path='/clientes/agregar' element={<AgregarCliente />} />
      <Route path='/clientes/actualizar/:id' element={<ActualizarCliente />} />
    </Routes>
  )
};

export default RutasPage;