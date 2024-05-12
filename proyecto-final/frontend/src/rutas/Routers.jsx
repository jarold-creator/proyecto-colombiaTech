import { Route, Routes } from 'react-router-dom';
import MostrarCliente from '../componentes/MostrarCliente';
import AgregarCliente from '../componentes/AgregarCliente';
import ActualizarCliente from '../componentes/ActualizarCliente';
import Inicio from '../componentes/Inicio';
import FormLogin from '../componentes/Form-login';
import MostrarProducto from '../componentes/MostarProducto';
import ActualizarProducto from '../componentes/ActualizarProducto';
import AgregarProducto from '../componentes/AgregarProducto';


const RutasPage = () => {
  return (
    <Routes>
      <Route path='/' element={<FormLogin />} />
      <Route path='/clientes' element={<MostrarCliente />} />
      <Route path='/productos' element={<MostrarProducto />} />
      <Route path='/clientes/inicio' element={<Inicio />}/>
      <Route path='/clientes/agregar' element={<AgregarCliente />} />
      <Route path='/productos/agregar' element={<AgregarProducto/>} />
      <Route path='/clientes/actualizar/:id' element={<ActualizarCliente />} />
      <Route path='/productos/actualizar/:id' element={<ActualizarProducto/>}/>
    </Routes>
  )
};

export default RutasPage;