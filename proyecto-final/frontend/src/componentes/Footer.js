import React, { useState, useEffect } from'react';
import { useLocation } from'react-router-dom';
import '../estilos/Footer.css';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  let content;
  if (currentPath === '/') {
    content = null;
  } else {
    content = (
      <div className="container-fluid contenedor-footer">
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
    );
  }

  return content;
};

export default Footer;