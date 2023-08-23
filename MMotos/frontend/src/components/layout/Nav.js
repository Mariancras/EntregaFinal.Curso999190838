import React, { useState } from 'react';
import {
    NavLink
} from 'react-router-dom';

const Nav = (props) => {
    const [menuAbierto, setmenuAbierto] = useState(false);

    const cerrarMenu = () => {
        setmenuAbierto(false);
    };

    const alternarMenu = () => {
        setmenuAbierto(!menuAbierto);
    };
    return (
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" checked={menuAbierto} onChange={alternarMenu} />

                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined} onClick={cerrarMenu}>Home</NavLink></li>
                    <li><NavLink to="/ConcesionarioDigital" className={({ isActive }) => isActive ? "activo" : undefined} onClick={cerrarMenu}>Concesionario Digital</NavLink></li>
                    <li><NavLink to="/novedades" className={({ isActive }) => isActive ? "activo" : undefined} onClick={cerrarMenu}>Novedades</NavLink></li>
                    <li><NavLink to="/guias" className={({ isActive }) => isActive ? "activo" : undefined} onClick={cerrarMenu}>Guias</NavLink></li >
                    <li><NavLink to="/galeria" className={({ isActive }) => isActive ? "activo" : undefined} onClick={cerrarMenu}>Galeria</NavLink></li >
                    <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined} onClick={cerrarMenu}>Nosotros</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined} onClick={cerrarMenu}>Contacto</NavLink></li >
                </ul>
            </div>
        </nav>

    );
}

export default Nav;

