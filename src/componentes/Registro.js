import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

import react, { useState } from 'react'

function Registro() {

    // Se declara una variable Values
    const [values, setValues]= useState({
        nombres:"",
        apellidos :"",
        email: "",
        password: ""
    })

    const handleChange = (e) => { //Cuando se cambie el input entonces se guarda la información de las variables
        const {name, value} =e.target
        const newValues ={
            //Spread operator
            ...values,
            [name]: value,
        }
        setValues(newValues)
        }
    
        const handleSubmit = (e) => {
            e.preventDefault()
            fetch('http://localhost:3001/registro-usuario',{
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                body: JSON.stringify(values)
            })

            .then(response => {
                if (response.status === 200) {
                    alert('Usuario creado con exito')
                }
                else {
                    alert('No fue posible crear el usuario '+ response.status)
                }

            })
            .catch((error)=>{
                alert("No fue posible finalizar el proceso de registro por un error "+ error)
            })
        }

    return (
        <div>
            <Header />
            <div class="container my-5 py-5">

                            <br></br>
                            <form onSubmit={handleSubmit}>
                                
                                <div class="form-row">
                                <div class="form-group col-md-6">
                                        <label for="inputEmail4">Nombre</label>
                                        <input type="text" className="form-control" id="input1" placeholder="Nombre" name='nombres' />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Apellidos</label>
                                        <input type="text" className="form-control" id="input2" placeholder="Email" name='apellidos' />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="input3" placeholder="Email" name='email'/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4">Password</label>
                                        <input type="password" className="form-control" id="input4" placeholder="Password" name='password' />
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </form>
                        </div>
            <Footer />
        </div>
    )
}

export default Registro