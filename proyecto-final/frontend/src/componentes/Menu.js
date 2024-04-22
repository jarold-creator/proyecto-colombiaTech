import '../estilos/Menu.css'

const Menu = () => {
    return (
        <div className='contenedor-menu'>
            <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="http://localhost:3000/clientes/inicio"><span>Inicio</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="http://localhost:3000/clientes/"><span>Clientes</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="http://localhost:3000/productos/"><span>Productos</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><span>Link</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true"><span>Link</span></a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;