import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = 'http://localhost:5000/api/clientes/';

const ActualizarCliente = () => {

  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [documento, setDocumento] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  
  /**funcion modificar cliente */
  const modificarCliente = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${URL}${id}`, {
        nombres: nombres,
        apellidos: apellidos,
        documento: documento,
        correo: correo,
        telefono: telefono,
        direccion: direccion
      })
      navigate('/clientes') /**navigate */
    } catch (error) {
      console.log(`Error al agregar los datos en la ${URL}`)
    }
  }

  useEffect(() => {
    getClientesById();
    // eslint-disable-next-line
  },[]);

  const getClientesById = async () => {
    const datos = await axios.get(`${URL}${id}`);
    setNombres(datos.data.nombres)
    setApellidos(datos.data.apellidos)
    setDocumento(datos.data.documento)
    setCorreo(datos.data.correo)
    setTelefono(datos.data.telefono)
    setDireccion(datos.data.direccion)
  }

  return (
    <div>
      <h3 className="titulo-formulario">Editar Clientes</h3>
      <form className='form-principal' onSubmit={modificarCliente}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-2">
              <label className="col-form-label">Nombres</label>
              <input
                className="form-control"
                type="text"
                value={nombres}
                onChange={(event) => setNombres(event.target.value)}
                placeholder="Ingrese Nombres"
                required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="col-form-label">Apellidos</label>
              <input
                className="form-control"
                type="text"
                value={apellidos}
                onChange={(event) => setApellidos(event.target.value)}
                placeholder="Ingrese Apellidos"
                required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="col-form-label">Documento</label>
              <input
                className="form-control"
                type="number"
                value={documento}
                onChange={(event) => setDocumento(event.target.value)}
                placeholder="Ingrese numero documento"
                required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="col-form-label">Correo</label>
              <input
                className="form-control"
                type="email"
                value={correo}
                onChange={(event) => setCorreo(event.target.value)}
                placeholder="Ingrese Correo"
                required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="col-form-label">Telefono</label>
              <input
                className="form-control"
                type="text"
                value={telefono}
                onChange={(event) => setTelefono(event.target.value)}
                placeholder="Ingrese Telefono"
                required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="col-form-label">Direccion</label>
              <input
                className="form-control"
                type="text"
                value={direccion}
                onChange={(event) => setDireccion(event.target.value)}
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

export default ActualizarCliente;