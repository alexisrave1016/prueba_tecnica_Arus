import React from 'react'

export const Navbar = () => {
  return (
    <div className='navBar_container'>
        <div>

        </div>

        <div className='carrucel'>
            <div className="carruel_prueba w-75 d-flex justify-content-center sm w-100">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active raya" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" className='raya'></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" className='raya'></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4" className='raya'></button>
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
