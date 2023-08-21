import React from 'react';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
        <img className="banner" src="img/banner nosotros.jpg" alt="caravana motos"/>

        <section className="historia">
            <article>
                <h2>Historia</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quas sed, possimus nemo qui
                    voluptate
                    sit perferendis recusandae eos, accusantium laborum voluptas asperiores veritatis? Voluptatem
                    non
                    voluptates architecto suscipit earum.</p>
                <p>Laborum repellat asperiores impedit quidem temporibus aut excepturi facere animi ab dolore
                    incidunt,
                    eum suscipit assumenda quas. Autem laborum aliquam reiciendis accusantium, laudantium dicta,
                    nesciunt vero unde animi ratione ea.</p>

            </article>
        </section>
        <section className="staff">
            <h2>Staff</h2>
            <div className="personas">
                <article className="persona">
                    <img src="img/nosotros/Persona1.jpg" alt="Juan Gomez"/>
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere dignissimos aliquid omnis vero,
                        placeat explicabo quasi tempore esse cumque dolorem consequatur commodi est assumenda id
                        obcaecati ea, harum incidunt excepturi!</p>
                </article>
                <article className="persona">
                    <img src="img/nosotros/Persona2.jpg" alt="Juan Gomez"/>
                    <h5>Mariano Perez</h5>
                    <h6>Gerente Comercial</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere dignissimos aliquid omnis vero,
                        placeat explicabo quasi tempore esse cumque dolorem consequatur commodi est assumenda id
                        obcaecati ea, harum incidunt excepturi!</p>
                </article>
                <article className="persona">
                    <img src="img/nosotros/Persona3.jpg" alt="Juan Gomez"/>
                    <h5>Nicolás Mazzotti</h5>
                    <h6>Gerente de Sistemas</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere dignissimos aliquid omnis vero,
                        placeat explicabo quasi tempore esse cumque dolorem consequatur commodi est assumenda id
                        obcaecati ea, harum incidunt excepturi!</p>
                </article>
                <article className="persona">
                    <img src="img/nosotros/Persona4.jpg" alt="Juan Gomez"/>
                    <h5>Federico Costante</h5>
                    <h6>Gerente de Marketingl</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere dignissimos aliquid omnis vero,
                        placeat explicabo quasi tempore esse cumque dolorem consequatur commodi est assumenda id
                        obcaecati ea, harum incidunt excepturi!</p>
                </article>
                <article className="persona">
                    <img src="img/nosotros/Persona5.jpg" alt="Juan Gomez"/>
                    <h5>Alberto Nazca</h5>
                    <h6>Gerente de Logistica</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere dignissimos aliquid omnis vero,
                        placeat explicabo quasi tempore esse cumque dolorem consequatur commodi est assumenda id
                        obcaecati ea, harum incidunt excepturi!</p>
                </article>
            </div>
        </section>




    </main>
    );
}

export default NosotrosPage;