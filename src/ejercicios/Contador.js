import React, { useState } from 'react'

function Contador() {
    const [counter, setCounter] = useState(0)
    const cuenta = () => {
      setCounter(counter + 1)
    }
    const restar = () => {
        setCounter(counter  -1)
      }
      const multiplicar = () => {
        setCounter(counter*2)
      }
      const reiniciar = () => {
        setCounter(0)
      }
    return (
      <div>
        <p>El número de clicks son {counter}</p>
        <button onClick={cuenta}>Incrementar</button>
        <button onClick={restar}>restar</button>
        <button onClick={multiplicar}>Multiplicador</button>
        <button onClick={reiniciar}>Reiniciar a cero</button>
      </div>
    );
  }

  export default Contador