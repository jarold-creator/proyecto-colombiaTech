import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../estilos/AgregarCliente.css'

const URL = 'http://localhost:5000/api/productos/';

const AgregarProducto = () => {

  const [nombre, setNombre] = useState('');
  const [presentacion, setPresentacion] = useState('');
  const [marca, setMarca] = useState('');
  const [fechaVence, setfechaVence] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');

  const navigate = useNavigate();

  const guardarProducto = async (event) => {
    event.preventDefault();
    try {
      await axios.post(URL, {
        nombre: nombre,
        presentacion: presentacion,
        marca: marca,
        fechaVence: fechaVence,
        cantidad: cantidad,
        precio: precio
      })

      // Limpiar los campos de entrada
      setNombre('');
      setPresentacion('');
      setMarca('');
      setfechaVence('');
      setCantidad('');
      setPrecio('');

      navigate('/productos/agregar');

    } catch (error) {
      console.log(`Error al agregar los datos en la ${URL}`)
    }
  }

  return (
    <div>
      <h3 className="titulo-formulario">Guardar Productos</h3>
      <form className='form-principal' onSubmit={guardarProducto}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-2">
              <label className="col-form-label">Nombre</label>
              <input
                className="form-control"
                type="text"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                placeholder="Ingrese Nombre"
                required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="col-form-label">Presentacion</label>
              <input
                className="form-control"
                type="text"
                value={presentacion}
                onChange={(event) => setPresentacion(event.target.value)}
                placeholder="Ingrese Presentacion"
                required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="col-form-label">Marca</label>
              <input
                className="form-control"
                type="text"
                value={marca}
                onChange={(event) => setMarca(event.target.value)}
                placeholder="Ingrese Marca"
                required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="col-form-label">FechaVence</label>
              <input
                className="form-control"
                type="text"
                value={fechaVence}
                onChange={(event) => setfechaVence(event.target.value)}
                placeholder="Ingrese Fecha Vence"
                required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="col-form-label">Cantidad</label>
              <input
                className="form-control"
                type="text"
                value={cantidad}
                onChange={(event) => setCantidad(event.target.value)}
                placeholder="Ingrese Cantidad"
                required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="col-form-label">Precio</label>
              <input
                className="form-control"
                type="text"
                value={precio}
                onChange={(event) => setPrecio(event.target.value)}
                placeholder="Ingrese Precio"
                required />
            </div>
          </div>
        </div>
        <div className="contenedor-guardar">
          <button
            type="submit"
            className="btn btn-primary boton-guardar">
            Guardar
          </button>
        </div>
      </form>
    </div>
  )
}

export default AgregarProducto;