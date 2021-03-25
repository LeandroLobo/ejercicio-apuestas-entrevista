import React from 'react'
import '../css/saldo.css'

const Saldo = ({saldo, setSaldo, user}) => {

    const handleClick = () => {
        setSaldo(parseInt(document.getElementById('ingreso-dinero').value))
    }
    return (
        <div id="saldo">
            {!saldo
                ? <div>
                    <h2>Hola {user}, tu saldo actual es de $0</h2>
                    <p>Parece que no tienes dinero en tu cuenta..</p>
                    <p>¿Quieres transferir dinero a tu cuenta de Apostar.MOV?</p>
                    <label htmlFor="ingreso-dinero"></label>
                    <input type="number" id="ingreso-dinero" min={1} step={1}/>
                    <button onClick={handleClick}>INGRESAR MONTO</button>
                </div>
                : <h2>Hola {user}, tu saldo actual es de ${saldo}</h2>
            }
        </div>
    )
}

export default Saldo
