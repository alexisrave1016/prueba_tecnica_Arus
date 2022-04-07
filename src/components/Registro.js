import React from 'react'
import { Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const Registro = () => {

    let history = useNavigate();


    const [ values, handleInputChange]= useForm({
        nombre:'alexis',
        email:'alexis@hotmail.com',
        pass1:'111111',
        pass2:'111111'
    })

    const{nombre,email,pass1,pass2}=values

    const handleRegistro=e=>{
        e.preventDefault();
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, pass1)
        .then(({user})=>{
          history.push('/login')
        })
        .catch(e=>{
            console.log(e)
            Swal.fire(
                { title:`${email}`,
                 text: 'Ya esta registrado',
                 icon: 'error',
                 confirmButtonText:'Confirmar'
             }
             )
            // meter modal que ay esta registrado
        })
        
    }
    return (
        <div className="registro_login"> 
        <Form className="container_registro" onSubmit={handleRegistro}>
             <Link to="/"><img className='logo_login_secundario' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1649305878/arus/c79fccdf775aeb035dce96889dea0d44-ilustraci-n-de-juego-de-controlador-cl-sico_ayhuwq.png" alt="" srcset="" /></Link>
            <div className="registro_contianer">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <h5 className="titulosRegistro">Tu nombre</h5>
                    <Form.Control 
                        className="registro_casillas"
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h5 className="titulosRegistro">Correo electronico</h5>
                    <Form.Control 
                        className="registro_casillas"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                   />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <h5 className="titulosRegistro">Contraseña</h5>
                    <Form.Control 
                        className="registro_casillas"
                        type="password"
                        placeholder="Como minimo 6 caracteres"
                        name="pass1"
                        value={pass1}
                        onChange={handleInputChange}
                  />
                    <span className="informacion_contrasñea"> 𝒾    La contraseña debe contener al menos seis caracteres.</span>
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <h5 className="titulosRegistro">Vuelva a escribir la contraseña</h5>
                    <Form.Control 
                        className="registro_casillas"
                        type="password"
                        placeholder="Password"
                        name="pass2"
                        value={pass2}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                

                <Button variant="primary" type="submit" className="registrar_nuevo">
                    Crea tu cuenta en Century Games
                </Button>

                <span className="inf_adicional">Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de Privacidad de 21stcenturygames.com</span>
                <hr className="linea1"/>
                <br />
                <span className="inf_adicional">¿Ya tienes una cuenta? Iniciar sesión
                                                ¿Compras para el trabajo? Crea una cuenta corporativa gratis</span>
            
            </div>
        </Form>

    </div>
    )
}
