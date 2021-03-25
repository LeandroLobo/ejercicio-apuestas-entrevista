import React from 'react'
import '../css/historial.css'

const Historial = ({resultados}) => {
    return (
        <div id="historial">
            <h3>Historial de manos:</h3>
            <ul>
                {resultados.map((res, i) => (
                    <li key={`mano${i}`}>
                        <p>Mano numero {i + 1}</p>
                        <p>Numero elegido: |{res.numero}|</p>
                        <p>Valor de la apuesta: ${res.apuesta}</p>
                        <p>Dados: |{res.dados[0]}| + |{res.dados[1]}|</p>
                        {res.ganador
                            ? <p>Ganaste ${res.premio}</p>
                            : <p>Perdiste ${Math.abs(res.premio)}</p>
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Historial
