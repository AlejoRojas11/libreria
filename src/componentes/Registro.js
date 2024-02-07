import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

function Registro() {

    // Se declara una variable Values
    const [values, setValues]= useState({
        nombre:"",
        apellido:"",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
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
            fetch('http://localhost:3001/registro-usurio',{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json', 'Accept': 'application/json'
                },
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
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputPassword4">Password</label>
                                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress2">Address 2</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputCity">City</label>
                                        <input type="text" class="form-control" id="inputCity" />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputState">State</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label for="inputZip">Zip</label>
                                        <input type="text" class="form-control" id="inputZip" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                                        <label class="form-check-label" for="gridCheck">
                                            Check me out
                                        </label>
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