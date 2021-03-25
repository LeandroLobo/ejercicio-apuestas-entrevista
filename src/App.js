import React, { Fragment, useState } from 'react'
import Dados from './components/Dados'
import FormApuesta from './components/FormApuesta'
import Historial from './components/Historial'
import Saldo from './components/Saldo'

function App() {
  
  const [resultados, setResultados] = useState([])
  const [jugadaActual, setJugadaActual] = useState({})
  const [saldo, setSaldo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  
  return (
    <Fragment>

      <div className="titulo-principal">
        <h1>Bienvenidos a Apostar.MOV</h1>
        <h2>Juego de apuesta de los dados</h2>
      </div>

      <Saldo
        saldo={saldo}
        setSaldo={setSaldo}
        user="nombre_usuario"
      />

      <FormApuesta 
        setJugadaActual={setJugadaActual} 
        saldo={saldo}
        setIsPlaying={setIsPlaying}
      />

      <hr></hr>

      <div className="seccion-juego">
        <Dados
          jugadaActual={jugadaActual}
          saldo={saldo}
          setSaldo={setSaldo}
          resultados={resultados}
          setResultados={setResultados}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <Historial
          resultados={resultados}
        />
      </div>

    </Fragment>
  );
}

export default App;
