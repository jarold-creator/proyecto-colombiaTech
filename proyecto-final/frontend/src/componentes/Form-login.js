import React from "react";
import '../estilos/Form-login.css'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

const FormLogin = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const valSubmit = (data) => {
        if (!data.email || !data.password) {
            return;
        }
        console.log(data);
        notify();
    };

    const notify = () => {
        toast.success("¡Ingreso con Éxito!");
    };

    return (
        <div className="contenedor-principal-formlogin">
            <h2 className='text-center'> Inicio de sesion </h2>
            <form onSubmit={handleSubmit(valSubmit)}>
                <div className="mb-3">
                    <label className="fw-bold">Correo Electrónico</label>
                    <input className="form-control"
                        {...register(
                            "email", { 
                                required: { value: true, message: 'El correo electrónico es obligatorio' },
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'El correo no es válido ingrese' }
                            })}
                        />
                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                </div>
                <div className="mb-3">
                    <label className="fw-bold">Contraseña</label>
                    <input type="password" className="form-control"
                        {...register(
                            "password", { 
                                required: { value: true, message: 'El campo contraseña es obligatorio' }, 
                                pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{};:,<.>]).{8,}$/, 
                                           message: 'La contraseña debe contener al menos una mayúscula, una minúscula, un número, un carácter especial y tener una longitud mínima de 8 caracteres' }
                                })} />
                    {errors.password && <span className="text-danger">{errors.password.message}</span>}
                </div>
                <div className="d-flex flex-column mt-4">
                    <Link to="/clientes/inicio">
                    <button type="submit" className="btn btn-primary">Ingresar</button>
                    </Link>
                </div>
                <div className="link-registrarse">
                <Link to="/registro">¿No tienes una cuenta? Regístrate aquí</Link>                    
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default FormLogin;
