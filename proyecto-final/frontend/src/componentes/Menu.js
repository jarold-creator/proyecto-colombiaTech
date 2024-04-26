import '../estilos/Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
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
