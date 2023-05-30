import React from "react";
import NavBar from "../../components/navbar/NavBar"
import './Home.css'
import Footer from "../../components/footer/Footer";
export const Home = () => {
    return(
        <div>
            <NavBar/>
                <section className="bienvenida">
                    <img src="./assets/3.jpg" alt="banner1" />
                    <h2>Lo primero que necesitas </h2>
                    <h3>Toma una taza de café</h3>
                    <p>
                        En Rulay hacemos café de especialidad, nos gusta verte bien 
                        y acompañarte en tus momentos de felicidad y tranquilidad.
                    </p>
                    <p>Aunque tambien nos gusta brindarte un espacio de concentracion para</p>
                    <p> que puedas trabajar remoto junto a otras personas con un cafe de por medio.</p>
                    <p>Te invitamos a que nos visites y disfrutes de un buen cafe.</p>

                    <button>Comprar ahora</button>
                    <button>Ir a la tienda</button>
               </section>
               <section className="colecciones">
                     <h2>Conoce nuestras colecciones</h2>
                        <div className="colecciones__container">
                            <div className="colecciones__container__item">
                                <img src="./assets/1.jpg" alt="banner1" />
                                <h3>Coleccion de cafe</h3>
                                <p>Conoce nuestra coleccion de cafe de especialidad</p>
                                <button>Ver mas</button>
                            </div>
                            <div className="colecciones__container__item">
                                <img src="./assets/2.jpg" alt="banner1" />
                                <h3>Coleccion de cafe</h3>
                                <p>Conoce nuestra coleccion de cafe de especialidad</p>
                                <button>Ver mas</button>
                            </div>
                            </div>
               </section>    
                <section className="footer">
                    <Footer/>
                </section>
       
  </div>

   
    )}


export default Home;