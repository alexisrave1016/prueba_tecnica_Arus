import React from 'react'

export const Card = (props) => {
    const{producto,precio,imagen }=props.card
  return (
    <div className="container_card">
        <div className="card_productos">
            <div className="img_producto">
                <img
                className="imagenCard"
                src={imagen}
                alt="no disponible"
                srcset=""
                />
            </div>
            <div className="contenido_productos">
                <span >$ {precio}</span>
                <span >{producto}</span>
                
            </div>
        </div>

    
  </div>
    
  )
}
