import Card from './CardList'
import React from 'react'
import './card.css'


function Cards(props) {
    return (
        <div className='card2'>
            <img src={props.items.image}  alt='logo'/>
            <div>
                <h5>{props.items.title}</h5>

                <span className='fecha'>Fecha de lanzamiento: <br></br>{props.items.fechaLanzamiento}</span>
                <p>{props.items.description}</p>
                <button type='button' className='btn btn-outline-success'>Comprar </button>
            </div>

        </div>
  )
}

export default Cards