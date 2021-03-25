import React, {useState} from 'react'
import '../css/form-apuesta.css'

const FormApuesta = ({setJugadaActual, saldo, setIsPlaying}) => {
    
    const [numero, setNumero] = useState(0)
    const [apuesta, setApuesta] = useState(0)
    const [errorNumero, setErrorNumero] = useState(false)
    const [errorApuesta, setErrorApuesta] = useState(false)
    const [errorValor, setErrorValor] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // control de ingreso de datos
        if(!numero)setErrorNumero(true)
        else setErrorNumero(false)

        if(!apuesta)setErrorApuesta(true)
        else setErrorApuesta(false)

        if(!numero || !apuesta)return
        
        if(apuesta > saldo){
            setErrorValor(true)
            return
        }

        setErrorValor(false)
        setJugadaActual({numero, apuesta})
        setIsPlaying(true)
    }

    return (
        <form className="form-apuesta" onSubmit={handleSubmit} >
            <h2>Haz tu apuesta y presiona el boton de "Jugar"</h2>

            <div>
                <label htmlFor="numero">Elige un Número del 1 al 12 </label>
                <input
                    type="number" 
                    id="numero" 
                    value={numero}
                    onChange={(e) => setNumero(parseInt(e.target.value))} 
                    min={1} max={12} step={1} 
                />
                {errorNumero ?<p className="error-campo">Campo Obligatorio</p> :null}
            </div>

            <div>
                <label htmlFor="apuesta">Ingresa el valor de tu Apuesta</label>
                <input 
                    type="number" 
                    id="apuesta" 
                    value={apuesta}
                    onChange={(e) => setApuesta(parseInt(e.target.value))}
                    min={1}
                />
                {errorApuesta ?<p className="error-campo">Campo Obligatorio</p> :null}
            </div>

            <input className="btn-jugar" type="submit" value="Jugar"/>
            {errorValor && <p className="error-campo">La apuesta debe ser menor o igual a tu saldo</p>}
        </form>
    )
}

export default FormApuesta
