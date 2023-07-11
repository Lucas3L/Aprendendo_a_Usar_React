import Button from './Eventos/Button'

function Evento(){

    function meuEvento(){
        console.log(`Ativacao Primeiro Evento Feita com Sucesso!!`)
    }

    function segundoEvento(){
        console.log(`Ativacao Segundo Elemento Feita com Sucesso!!`)
    }

    return(
        <>
        <p>Click para disparar um evento</p>
        <Button event = {meuEvento}text = "Primeiro Evento" />
        <Button event = {segundoEvento}text = "Segundo Evento" />
        </>
    )
}

export default Evento