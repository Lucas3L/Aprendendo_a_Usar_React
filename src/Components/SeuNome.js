
function SeuNome({setNome}){

    return(
        <>
            <p>Digite Seu Nome:</p>
            <input 
            type = "text" 
            placeholder = "Qual é o seu nome?"
            onChange = {(e) => setNome(e.target.value)}/>
        </>
    )
}

export default SeuNome