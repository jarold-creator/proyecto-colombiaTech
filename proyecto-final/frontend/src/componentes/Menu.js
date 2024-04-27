import '../estilos/Menu.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Menu = () => {

  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }


  return (
    <div className='contenedor-menu'>
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <Link to="/clientes/inicio" className="nav-link">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/clientes" className="nav-link">Clientes</Link>
        </li>
        <li className="nav-item">
          <Link to="/productos" className="nav-link">Productos</Link>
        </li>
        <li className="nav-item">
          <Link to="/link" className="nav-link">Link</Link>
        </li>
        <li className="nav-item">
          <Link to="/link" className="nav-link">Link</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
