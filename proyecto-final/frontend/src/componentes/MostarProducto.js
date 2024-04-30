import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import actualizarProducto from './ActualizarProducto';
import '../estilos/MostrarCliente.css'


const URL = 'http://localhost:5000/api/productos/';

const MostrarProducto = () => {

  const [productos, setProductos] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getProductos()
  },[]);

  /**funcion mostrar todos los clientes */
  const getProductos = async () => {
    try {
      const datos = await axios.get(URL);
      setProductos(datos.data);
    } catch (error) {
      console.log(`${error.message}`)
    }
  }

  /**funcion eliminiar clientes rama develop*/
  const eliminarProductosById = async (id) => {
    try {
      await axios.delete(`${URL}${id}`);
      getProductos();
      //eslint-disable-next-line      
    } catch (error) {
      console.log(`${error.message}`)
    }
  }

  const filteredProductos = productos.filter(producto => {
    return (
      producto.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
      producto.presentacion.toLowerCase().includes(searchText.toLowerCase()) ||
      (typeof producto.marca === 'string' && producto.marca.toLowerCase().includes(searchText.toLowerCase())) ||
      producto.fechaVence.toLowerCase().includes(searchText.toLowerCase()) ||
      (typeof producto.cantidad === 'string' && producto.cantidad.toLowerCase().includes(searchText.toLowerCase())) ||
      (typeof producto.precio === 'string' && producto.precio.toLowerCase().includes(searchText.toLowerCase()))
    );
  });
  
  
  return (
    <div className='contenedor'>
      <div className='row'>
        <div className='col'>
          <div className='contenedor-input-busqueda'>
        <input
            type="text"
            className='form-control-sm input-busqueda'
            placeholder="Buscar..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Link
            to='/productos/agregar'
            className='btn btn-outline-primary mt-4 mb-4 boton-agregar'>
            <i className="fa-solid fa-user-plus"></i>
          </Link>
          </div>
          <table className='table table-bordered table-striped table-responsive table-sm align-middle'>
            <thead className='thead-dark'>
              <tr>
                <th>Nombre</th>
                <th>Presentacion</th>
                <th>Marca</th>
                <th>FechaVence</th>
                <th>Cantidad</th>
                <th>Precio</th> 
                <th>Acciones</th>                
              </tr>
            </thead>
            <tbody>
              {filteredProductos.map((producto, index) => {
                return (
                  <tr key={index}>
                    <td>{producto.nombre}</td>
                    <td>{producto.presentacion}</td>
                    <td>{producto.marca}</td>
                    <td>{producto.fechaVence}</td>
                    <td>{producto.cantidad}</td>
                    <td>{producto.precio}</td>
                    <td>
                      <Link
                        to={`/productos/actualizar/${producto._id}`}
                        className='btn btn-outline-success m-1'
                        onClick={() => { actualizarProducto(producto._id) }}>
                        <i className='fa-solid fa-pen fa-lg'></i>
                      </Link>
                      <button
                        to={`/productos/eliminar/${producto._id}`}
                        className='btn btn-outline-danger m-1'
                        onClick={() => { eliminarProductosById(producto._id) }}
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

export default MostrarProducto;