import {
    BrowserRouter as Router,
    Routes,
    Route,
    } from "react-router-dom"
   

    import React from 'react'
import App from "../containers/App"
import Login from "../components/Login"
import { Registro } from "../components/Registro"
    
    export default function AppRouters() {
      return (
        <Router>
          <Routes>
            <Route path="/" exact element={<App/>}/>
            <Route path="/login" exact element={<Login/>}/>
            <Route path="/registro" exact element={<Registro/>}/>

          </Routes>
        </Router>
      )
    }
    