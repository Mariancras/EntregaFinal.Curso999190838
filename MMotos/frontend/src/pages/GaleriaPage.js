import React, { useState } from 'react';

const GaleriaPages = (props) => {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    const clickEnImagen = (imageSrc) => {
        setImagenSeleccionada(imageSrc);
    };

    const cerrarImagen = () => {
        setImagenSeleccionada(null);
    };

    return (
        <main className="holder">
            <img className="banner" src="img/banner test.jpeg" alt="harley davidson" />
            <h2>Galeria</h2>
            <section className="galeria">
                <img src="img/test/test1.jpg" alt="moto test 1" onClick={() => clickEnImagen("img/test/test1.jpg")} />
                <img src="img/test/test2.jpg" alt="moto test 2" onClick={() => clickEnImagen("img/test/test2.jpg")} />
                <img src="img/test/test3.webp" alt="moto test 3" onClick={() => clickEnImagen("img/test/test3.webp")} />
                <img src="img/test/test4.jpg" alt="moto test 4" onClick={() => clickEnImagen("img/test/test4.jpg")} />
                <img src="img/test/test5.jpg" alt="moto test 5" onClick={() => clickEnImagen("img/test/test5.jpg")} />
                <img src="img/test/test6.png" alt="moto test 6" onClick={() => clickEnImagen("img/test/test6.png")} />
                <img src="img/test/test7.avif" alt="moto test 7" onClick={() => clickEnImagen("img/test/test7.avif")} />
            </section>

            {imagenSeleccionada && (
                <div className="exhibidor">
                    <span className="boton-cerrar" onClick={cerrarImagen}>
                    &times;
                    </span>
                    <img
                        src={imagenSeleccionada}
                        alt="Imagen seleccionada"
                        onClick={cerrarImagen}
                    />
                </div>
            )}

        </main>
    );
}

export default GaleriaPages;