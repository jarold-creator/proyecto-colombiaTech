import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = 'http://localhost:5000/api/productos/';

const ActualizarProducto = () => {

  const [nombre, setNombre] = useState('');
  const [presentacion, setPresentacion] = useState('');
  const [marca, setMarca] = useState('');
  const [fechaVence, setFechavence] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  
  /**funcion modificar producto */
  const modificarProducto = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${URL}${id}`, {
        nombre: nombre,
        presentacion: presentacion,
        marca: marca,
        fechaVence: fechaVence,
        cantidad: cantidad,
        precio: precio
      })
      navigate('/productos') /**navigate */
    } catch (error) {
      console.log(`Error al agregar los datos en la ${URL}`)
    }
  }

  useEffect(() => {
    getProductosById();
    // eslint-disable-next-line
  },[]);

  const getProductosById = async () => {
    const datos = await axios.get(`${URL}${id}`);
    setNombre(datos.data.nombre)
    setPresentacion(datos.data.presentacion)
    setMarca(datos.data.marca)
    setFechavence(datos.data.fechaVence)
    setCantidad(datos.data.cantidad)
    setPrecio(datos.data.precio)
  }

  return (
    <div>
      <h3 className="titulo-formulario">Editar Productos</h3>
      <form className='form-principal' onSubmit={modificarProducto}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-2">
              <label className="col-form-label">Nombre</label>
              <input
                className="form-control"
                type="text"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                placeholder="Ingrese Nombres"
                required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="col-form-label">Presentacion</label>
              <input
                className="form-control"
                type="text"
                value={presentacion}
                onChange={(event) => setPresentacion(event.target.value)}
                placeholder="Ingrese Apellidos"
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
                placeholder="Ingrese numero documento"
                required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="col-form-label">fechaVence</label>
              <input
                className="form-control"
                type="text"
                value={fechaVence}
                onChange={(event) => setFechavence(event.target.value)}
                placeholder="Ingrese Correo"
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
                placeholder="Ingrese Telefono"
                required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="col-form-label">Precio</label>
              <input
                className="form-control"
                type="text"
                value={precio}
                onChange={(event) => setPrecio(event.target.value)}
                placeholder="Ingrese Direccion"
                required />
            </div>
          </div>
        </div>
        <div className="contenedor-guardar">
          <button
            type="submit"
            className="btn btn-primary boton-guardar">
            Actulizar
          </button>
        </div>
      </form>
    </div>
  )
}

export default ActualizarProducto;