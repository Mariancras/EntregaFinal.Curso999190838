import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="img/headder.png" alt='MMotos' />
                <ul className="contenedorRedes">
                    <li className="iconito facebook">
                        <span className="tooltip">Facebook</span>
                        <span><i className="fab fa-facebook-f"></i></span>
                    </li>
                    <li className="iconito twitter">
                        <span className="tooltip">Twitter</span>
                        <span><i className="fab fa-twitter"></i></span>
                    </li>
                    <li className="iconito instagram">
                        <span className="tooltip">Instagram</span>
                        <span><i className="fab fa-instagram"></i></span>
                    </li>

                </ul>
            </div>
        </header>
    );
}

export default Header;