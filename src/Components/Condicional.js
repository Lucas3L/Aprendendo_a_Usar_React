import {useState} from 'react'

function Condicional() {

    const [email,setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e){
        setUserEmail('')
    }

    return(
        <>
        <h2>Cadastro de email:</h2>
        <form>
            <input 
            type = "email" 
            placeholder = "Digite o seu email"
            onChange={(e) => setEmail(e.target.value)}
            />
            <button type = "submit" onClick = {enviarEmail}>Enviar email</button>
            {userEmail &&(
                <div>
                    <p>O email do usuário é: {userEmail}</p>
                    <button onClick= {limparEmail}>Limpar email</button>
                </div>
            )}
        </form>
        </>
    )
}

export default Condicional