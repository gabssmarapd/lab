import Button from "./evento/Button"

function Evento({ numero }) {

    function meuEvento() {
        console.log(`Primeiro evento ativado!`)
    }
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text='Primeiro Evento' />
        </div>
    )
}

export default Evento