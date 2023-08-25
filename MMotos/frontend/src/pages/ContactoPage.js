import '../App.css';
import { useState } from 'react';
import axios from 'axios';


import React from 'react';


const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        if (!formData.email || !formData.mensaje) {
            setMsg('Los campos de correo electrónico y mensaje son obligatorios.');
            setSending(false);
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/api/contacto', formData);
            setMsg(response.data.message);
            
            if (response.data.error === false) {
                setFormData(initialForm);
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setMsg('Hubo un problema al enviar el formulario. ');
        } finally {
            setSending(false);
        }
    }

    return (
        <main className="holder">
            <img className="banner" src="img/contacto.jpg" alt="pareja intercom" />

            <section className="contacto">
                <div>
                    <h2>Contacto Rápido</h2>
                    <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                        <p>
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" placeholder="Ingresa tu nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p>
                            <label htmlFor="email">Email*:</label>
                            <input type="email" placeholder="Ingresa un mail para responderte" name="email" value={formData.email} onChange={handleChange}/>
                        </p>
                        <p>
                            <label htmlFor="telefono">Teléfono:</label>
                            <input type="tel" placeholder="Ejemplo: +54 11 62897251" name="telefono" value={formData.telefono} onChange={handleChange}/>
                        </p>
                        <p>
                            <label htmlFor="mensaje">Mensaje*:</label>
                            <textarea id="" cols="30" rows="10" maxLength="2500" name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                        </p>
                        <p>
                            <input type="submit" value="Enviar" />
                        </p>
                    </form>
                    {sending ? <p>Enviando...</p>:null}
                    {msg ? <p>{msg}</p>:null}
                    
                </div>
                
                <div className="datos">
                    <h2>Otras vias de comunicación</h2>
                    <p>También puede contactarse con nosotros usando los siguientes medios</p>
                    <ul>
                        <li>Teléfono: 47541252</li>
                        <li>Email: contacto@mmotos.com.ar</li>
                        <li>Facebook: /Mmotos</li>
                        <li>Twitter: /Mmotos</li>
                        <li>Instagram: /Mmotos</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default ContactoPage;