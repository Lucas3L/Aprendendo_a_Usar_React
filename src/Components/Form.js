import { useState} from 'react'
import styles from './Frase.module.css'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuario ${name} foi cadastrado com sucesso coma senha ${password}.`)
    }

    const [name,setName] = useState()
    const [password,setPassword] = useState()

    return(
        <>
        <h1>Meu Cadastro:</h1>
            <form onSubmit = {cadastrarUsuario} className = {styles.cadastro}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                    type="text" 
                    id = "name" 
                    name = "name " 
                    placeholder="Digite o seu nome"
                    onChange = {(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="password" 
                    id = "password" 
                    name = "password" 
                    placeholder="Digite a senha"
                    onChange = {(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>
    )

}

export default Form