
function Evento({numero}){

    function meuEvento(){
        console.log(`Ativacao Feita com sucesso, ${numero}!!`)
    }

    return(
        <>
        <p>Click para disparar um evento</p>
        <button onClick={meuEvento}>Ativar</button>
        </>
    )
}

export default Evento