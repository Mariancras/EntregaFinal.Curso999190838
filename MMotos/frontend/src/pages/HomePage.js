import React from 'react';


const HomePage = (props) => {
    return (
        <main>
            {/* <img className="banner" src="img/yamaha-yzf-r3.jpg" alt="yamaha r3 2020" /> */}


            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/carrusel/Carrusel 1.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>La entendemos mejor:</h5>
                            <p>Bienvenido a TU sitio de motos</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/carrusel/Carrusel 2.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Te entendemos mejor!</h5>
                            <p>Sabemos lo que te gusta, porque es lo mismo que a nosotros.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/carrusel/Carrusel 3.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>La soñamos mejor</h5>
                            <p>Busca nuestras guías, galería y concesionario online!</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="holder">
            <div className="columnas">
                <section className="bienvenidos">
                    <article>
                        <h2>Bienvenidos</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quas sed, possimus nemo qui
                            voluptate
                            sit perferendis recusandae eos, accusantium laborum voluptas asperiores veritatis? Voluptatem
                            non
                            voluptates architecto suscipit earum.
                            Laborum repellat asperiores impedit quidem temporibus aut excepturi facere animi ab dolore
                            incidunt,
                            eum suscipit assumenda quas. Autem laborum aliquam reiciendis accusantium, laudantium dicta,
                            nesciunt vero unde animi ratione ea.
                            Quam beatae, itaque et nam error placeat veniam illum molestias quod eos a voluptatibus
                            repudiandae
                            vero dolor blanditiis incidunt. Animi impedit praesentium unde eum adipisci, dolore placeat
                            ipsam
                            nisi ipsa!
                            Expedita molestias quasi voluptates explicabo aperiam laudantium hic dicta sunt reiciendis.
                            Optio
                            perferendis, consequatur aperiam fugit deleniti beatae nesciunt explicabo unde, asperiores natus
                            labore doloribus, iure quos sunt sit. Praesentium.
                            Totam, praesentium minima obcaecati deserunt sit a, voluptatem aliquid ea consequuntur possimus
                            molestiae quo harum facilis dicta blanditiis ex atque optio cupiditate repellat suscipit commodi
                            officia earum. Incidunt, repellat sunt?
                            Nihil quas repellendus nesciunt impedit! Dolorem quam quae commodi cupiditate totam, repellat
                            molestiae eius eos culpa nesciunt magni, facere nulla quos nisi quas veniam. Iste aperiam sequi
                            animi recusandae maxime.</p>
                    </article>
                </section>
                <aside className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan gomez - demotos.com</span>
                    </div>
                </aside>

            </div>
            </div>
        </main>
    );
}

export default HomePage;