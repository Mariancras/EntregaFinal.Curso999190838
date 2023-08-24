import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="img/headder.png" alt='MMotos' />
                <ul class="wrapper">
                    <li class="icon facebook">
                        <span class="tooltip">Facebook</span>
                        <span><i class="fab fa-facebook-f"></i></span>
                    </li>
                    <li class="icon twitter">
                        <span class="tooltip">Twitter</span>
                        <span><i class="fab fa-twitter"></i></span>
                    </li>
                    <li class="icon instagram">
                        <span class="tooltip">Instagram</span>
                        <span><i class="fab fa-instagram"></i></span>
                    </li>

                </ul>
            </div>
        </header>
    );
}

export default Header;