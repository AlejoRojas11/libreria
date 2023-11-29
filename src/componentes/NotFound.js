import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <div class="d-flex align-items-center justify-content-center vh-100">
                <div class="text-center row">
                    <div class=" col-md-6">
                        <img src="https://mystickermania.com/cdn/stickers/into_the_web/sticker_2020.png" alt=""
                            class="img-fluid" />
                    </div>
                    <div class=" col-md-6 mt-5">
                        <p class="fs-3"> <span class="text-danger">Opps!</span> Página no encontrada</p>
                        <p class="lead">
                            La página que buscas no se encuentra.
                        </p>
                        <Link to='/'>
                            <a href="index.html" class="btn btn-primary">Volver a casa</a>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NotFound