import React, { useState } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

function Registro() {
    const [values, setValues] = useState({
        nombres: "",
        apellidos: "",
        email: "",
        password: ""

    })
    const handleChange = (e) => { //cuando se cambie de Input entonces se guarda la información en la variables.

        const { name, value } = e.target
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/registro-usuario', {
            method: 'POST',
            headers: { "Content-Type": "application/json", 'Accept': 'application/json' },           
            body: JSON.stringify(values)
        })
            .then(response => {
                if (response.status === 200) {
                    alert("Usuario creado con éxito")
                }
                else {
                    alert("No fue posible crear el usuario " + response.status)

                }
            })
            .catch((error) => {
                alert("No fue posible finalizar el proceso de registro por un error " + error)
            })


    }

    return (
        <div>
            <Header />
            <div className="container my-5 py-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputNombre">Nombre</label>
                            <input type="text" className="form-control" id="inputNombre" placeholder="Nombre" name="nombres" onChange={handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputApellidos">Apellidos</label>
                            <input type="text" className="form-control" id="inputApellidos" placeholder="Apellidos" name="apellidos" onChange={handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">Email</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="email" onChange={handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" onChange={handleChange} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Registro;