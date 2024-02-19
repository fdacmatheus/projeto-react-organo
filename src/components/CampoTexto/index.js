import './CampoTexto.css';

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`;

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto;