import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

function Contacto() {
    return (
        <div>
            <Header />
            <div class="container my-5 py-5">
                <section class="mb-4">
                    <h2 class="h1-responsive font-weight-bold text-center my-4">Contactenos</h2>

                    <p class="text-center w-responsive mx-auto mb-5">¿Tienes alguna pregunta? Por favor no dude en contactarnos. Nuestro equipo se comunicará con usted en cuestión de minutos.</p>

                    <div class="row">


                        <div class="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                                <div class="row">


                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" class="form-control" />
                                            <label for="name" class="">Nombre</label>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="email" name="email" class="form-control" />
                                            <label for="email" class="">Correo</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <input type="text" id="subject" name="subject" class="form-control" />
                                            <label for="subject" class="">Mótivo</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">

                                        <div class="md-form">
                                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                            <label for="message">Mensaje</label>
                                        </div>

                                    </div>
                                </div>
                            </form>

                            <div class="text-center text-md-left">
                                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Enviar</a>
                            </div>
                            <div class="status"></div>
                        </div>

                        <div class="col-md-3 text-center">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                    <p>Colombia calle 20</p>
                                </li>

                                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+57 310 577 7738</p>
                                </li>

                                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>contacto@gmail.com</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Contacto