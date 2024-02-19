import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";

function App() {
  const times = [
    {
      nome: 'Tecnolgia',
      corPrimaria: '#576278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'UX',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Tráfego',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    }
  ];
  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]);
  }
  return (
    <div className="App">
        <Banner />
        <Formulario times={times.map(time => time.nome)} aoNovoColaborador={colaborador => aoNovoColaborador(colaborador)} />
        {times.map(time => 
        <Time 
        key={time.nome}
        nome={time.nome} corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
        <Rodape />
    </div>
  );
}

export default App;
