import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css';

const Formulario = (props) => {
    const aoSalvar = (e) => {
        e.preventDefault();
        props.aoNovoColaborador({
            nome,
            cargo,
            imagem,
            time
        });
        setNome('')
        setCargo('')
        setTime('')
        setImagem('')
    }
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar os dados do colaborador</h2>
                <CampoTexto 
                label="Nome" 
                placeholder="Insira seu nome" 
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                label="Cargo" 
                placeholder="Insira seu cargo" 
                valor={cargo}
                aoAlterado={cargo => setCargo(cargo)}
                />
                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem"
                valor={imagem}
                aoAlterado={imagem => setImagem(imagem)}
                 />
                <ListaSuspensa
                label="Selecione seu time"
                itens={props.times}
                valor = {time}
                aoAlterado={time => setTime(time)}
                  />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;