import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="img/headder.png" alt='MMotos' />
                <ul className="wrapper">
                    <li className="icon facebook">
                        <span className="tooltip">Facebook</span>
                        <span><i className="fab fa-facebook-f"></i></span>
                    </li>
                    <li className="icon twitter">
                        <span className="tooltip">Twitter</span>
                        <span><i className="fab fa-twitter"></i></span>
                    </li>
                    <li className="icon instagram">
                        <span className="tooltip">Instagram</span>
                        <span><i className="fab fa-instagram"></i></span>
                    </li>

                </ul>
            </div>
        </header>
    );
}

export default Header;