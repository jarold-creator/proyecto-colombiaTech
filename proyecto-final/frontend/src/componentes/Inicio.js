import React from "react"
import '../estilos/Inicio.css'

const Inicio = () => {
    return (
        <div className="contenedor-inicio">
            
            <div className="secciones">
            <div className="tarjeta">
                    <h3>Bienvenidos a nuestra pagina</h3>                    
                </div>
                <div className="tarjeta">
                    <h3>Misión</h3>
                    <p>En nuestra empresa de gestión de información, nuestra misión es proporcionar soluciones innovadoras y eficientes para la gestión y protección de datos, ofreciendo servicios de alta calidad que satisfagan las necesidades y expectativas de nuestros clientes. Nos comprometemos a garantizar la seguridad, integridad y accesibilidad de la información en un entorno cada vez más digitalizado, contribuyendo al éxito y la seguridad de las organizaciones que confían en nuestros servicios.</p>
                </div>

                <div className="tarjeta">
                    <h3>Visión</h3>
                    <p>Nos visualizamos como líderes en el campo de la gestión de información, reconocidos por nuestra excelencia en la protección, organización y análisis de datos. Nos esforzamos por ser un socio confiable y de confianza para nuestros clientes, proporcionando soluciones innovadoras y personalizadas que impulsen la eficiencia operativa y la toma de decisiones informadas. Buscamos expandir nuestro alcance y fortalecer nuestro compromiso con la excelencia, permitiendo el crecimiento sostenible de nuestra empresa y la satisfacción continua de nuestros clientes.</p>
                </div>

                <div className="tarjeta">
                    <h3>Experiencia de Usuario</h3>
                    <p>Buscamos mejorar continuamente la experiencia de usuario en todas nuestras interacciones.</p>
                    <img src="/ruta/a/imagen.jpg" alt="Imagen de Experiencia de Usuario" />
                </div>
            </div>
        </div>

    )
}

export default Inicio