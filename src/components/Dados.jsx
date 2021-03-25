import React, {useState, useEffect} from 'react'
import '../css/dados.css'

const Dados = ({jugadaActual, saldo, setSaldo, resultados, setResultados, isPlaying, setIsPlaying}) => {

    const [dados, setDados] = useState([0, 0])
    const [mensajeGanador, setMensajeGanador] = useState('')

    const tirarDados = () => {
        const dado1 = Math.ceil(Math.random()*6)
        const dado2 = Math.ceil(Math.random()*6)
        setDados([dado1, dado2])
        analizarJugada(dado1, dado2)
    }
    
    const analizarJugada = (dado1, dado2) => {
        const {numero, apuesta} = jugadaActual
        let ganador = false
        let premio = 0

        if (dado1 + dado2 === numero){
            premio = apuesta*2
            setSaldo(saldo + premio)
            ganador = true
        }else{
            if (dado1 === numero || dado2 === numero){
                premio = apuesta
                setSaldo(saldo + premio)
                ganador = true
            }
            if (dado1 === numero && dado2 === numero){
                premio += apuesta
                setSaldo(saldo + apuesta)
                ganador = true
            }
        }

        if(ganador) setMensajeGanador('GANASTE')
        else {
            premio = -apuesta
            setSaldo(saldo + premio)
            setMensajeGanador('PERDISTE')
        }

        setResultados([...resultados, {numero, apuesta, ganador, premio, dados}])
        setIsPlaying(false)
    }

    useEffect(() => {
        if(isPlaying)tirarDados();
    }, [isPlaying])

    return (
        <div id="dados">
            <h3>DADOS</h3>
            <div>
                <p id="dado1">{dados[0]}</p>
                <p id="dado2">{dados[1]}</p> 
            </div>
            <h2>{mensajeGanador}</h2>
        </div>
    )
}

export default Dados
