import React, { useState, useEffect } from 'react';
import '../estilos/Footer.css'


const Footer = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="card text-center contenedor-footer">
            <div className="card-body">
                <p>&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
                <p>Fecha y hora actual: {currentDateTime.toLocaleString()}</p>
            </div>
            <div className='redes-sociales'>
                <p className='parrafo-redes-sociales'>Redes Sociales</p>
                <a href='#'><i className="fa-brands fa-facebook"></i></a>
                <a href='#'><i className="fa-brands fa-square-instagram"></i></a>
                <a href='#'><i className="fa-brands fa-youtube"></i></a>
            </div>
        </div>
    )
}

export default Footer;