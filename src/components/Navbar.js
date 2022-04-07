import React from 'react'

export const Navbar = () => {
  return (
    <div className='navBar_container'>
        <div className='navBar'>
            <div className='logo_navBar'>
                <img className='logo_principal' alt='' src='https://res.cloudinary.com/dd01p9lb9/image/upload/v1649305878/arus/c79fccdf775aeb035dce96889dea0d44-ilustraci-n-de-juego-de-controlador-cl-sico_ayhuwq.png'/>
                <h1 className='titulo_principal'>21st Century Games</h1>
            </div>
            <div className='registro'>
                <img className='logotipos_navBar' src='https://res.cloudinary.com/dd01p9lb9/image/upload/v1649305579/arus/b465abad5d46646422a42343787f493b_rliin5.png' alt=''/>
            <span className='titulo_principal inisiarSesion'>Iniciar Sesion/ Registo</span>
            </div>
            <div className='carrito'>
                <img className='logotipos_navBar logo_carrito' src='https://res.cloudinary.com/dd01p9lb9/image/upload/v1649305781/arus/Ilustra_C3_A7_C3_A3o-Carrinho-de-Compras-PNG-1280x720_ozn3pk.png' alt=''/>
            </div>
           
           

        </div>

        <div className='carrucel'>
            <div className="carruel_prueba w-75 d-flex justify-content-center sm w-100">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active"  data-bs-interval="10000">
                            <img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1649300035/arus/13124_cbpngc.jpg" className="imagen_carrucel d-block" alt="..." /></div>

                            <div className="carousel-item" data-bs-interval="2000">
                                    <img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1649299976/arus/conjunto-objetos-relacionados-videojuegos-neon-estilo-lineal_24908-58670_lvxy2b.jpg" className="imagen_carrucel d-block" alt="..." /> </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                    <img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1649299995/arus/neon-icons-for-decoration-in-gaming-clubs-vector-id1169731789_fop8uk.jpg" className="imagen_carrucel d-block" img-fluid alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="4000">
                                    <img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1649299925/arus/3579_g7dpcn.jpg" className="imagen_carrucel d-block" alt="..." />
                            </div>
                            
                    </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                </div>
            </div>
 
        </div>
    </div>
  )
}
