import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card';


const url="https://api-alexisrave-anime.herokuapp.com/Arus";


const App = () => {

    const[productos,setProductos]=useState([])

    const peticionGet=async()=>{
        await axios.get(url)
        .then(
            resp=>{
                setProductos(resp.data)

            }
        ).catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        peticionGet()
    },[])
  return (
    <div className='appContainer'>
        <div className='portada_pricnipal'>
            <h1>21st Century Games</h1>
            <span>Seleciona tu juego preferido, demuestra ser el mejor , aprovecha nuestos precios de locura, los mejores del mercado</span>
        </div>
        <div className='pintarCard'>
            {
                productos.map(item=>(
                <Card
                    key={item.titulo}
                    productos={productos}
                    card={item}
                />
                ))
            }

        </div>


    </div>
  )
}

export default App