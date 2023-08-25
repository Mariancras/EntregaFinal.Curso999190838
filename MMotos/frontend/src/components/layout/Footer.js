import React from 'react';

const Footer = (props) => {
    return (
        <footer>
            <p>Derechos reservados. MMotos 2023</p>
            <a href="https://wa.me/+5491162897255?text=Me%20gustaría%20saber%20mas%20sobre%20esta%20moto" className="whatsapp" target="_blank" rel="noreferrer"> <i className="fa fa-whatsapp whatsapp-iconito"></i></a>
        </footer>
    );
}

export default Footer;
/*el icono de WA abre automaticamente la App y se le agrego rel="noreferrer"  para hacerlo ams seguro en navegadores antiguos */