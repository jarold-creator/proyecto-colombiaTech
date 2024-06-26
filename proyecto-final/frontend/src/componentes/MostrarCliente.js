import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ActualizarCliente from './ActualizarCliente';

const URL = 'http://localhost:5000/api/clientes/';

const MostrarCliente = () => {

  const [clientes, setCliente] = useState([]);

  useEffect(() => {
    getClientes()
  },[]);

  /**funcion mostrar todos los clientes */
  const getClientes = async () => {
    try {
      const datos = await axios.get(URL);
      setCliente(datos.data);
    } catch (error) {
      console.log(`${error.message}`)
    }
  }

  /**funcion eliminiar clientes rama develop*/
  const eliminarClientesById = async (id) => {
    try {
      await axios.delete(`${URL}${id}`);
      getClientes();
      //eslint-disable-next-line      
    } catch (error) {
      console.log(`${error.message}`)
    }
  }

  return (
    <div className='contenedor'>
      <div className='row'>
        <div className='col'>
          <Link
            to='/clientes/agregar'
            className='btn btn-outline-primary mt-4 mb-4'>
            <i className="fa-solid fa-user-plus"></i>
          </Link>
          <table className='table table-bordered table-striped table-responsive table-sm align-middle'>
            <thead className='thead-dark'>
              <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Documento</th>
                <th>Correo</th>
                <th>Telefono</th>
                <th>Direccion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente, index) => {
                return (
                  <tr key={index}>
                    <td>{cliente.nombres}</td>
                    <td>{cliente.apellidos}</td>
                    <td>{cliente.documento}</td>
                    <td>{cliente.correo}</td>
                    <td>{cliente.telefono}</td>
                    <td>{cliente.direccion}</td>
                    <td>
                      <Link
                        to={`/clientes/actualizar/${cliente._id}`}
                        className='btn btn-outline-success m-1'
                        onClick={() => { ActualizarCliente(cliente._id) }}>
                        <i className='fa-solid fa-pen fa-lg'></i>
                      </Link>
                      <button
                        to={`/clientes/eliminar/${cliente._id}`}
                        className='btn btn-outline-danger m-1'
                        onClick={() => { eliminarClientesById(cliente._id) }}
                      >
                        <i className='fa-solid fa-trash-can fa-lg'></i>
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MostrarCliente;