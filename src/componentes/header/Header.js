import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='contenedor'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src='logo.jpg' className='logo' alt='Logo'></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tutoriales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Referencias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Recursos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Contacto</a>
                            </li>
                            <Link to='/registro'>
                                <li className="nav-item">

                                    <a className="nav-link disabled">Registrarse</a>
                                </li>
                            </Link>
                            <li className="nav-item">
                                <a className="nav-link active">Iniciar sesión</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header