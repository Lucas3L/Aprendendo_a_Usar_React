import styles from './Frase.module.css'
function OutraLista({itens}){

    return(
        <>
            <h3>Lista de Coisas Boas:</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => <h1 className={styles.Cadastro} Key = {index}>{item}</h1>)
                ) : (
                    <p className={styles.Emergencia}>Não Existem Itens Nesta Lista!!</p>
                )
            }
        </>
    )
}

export default OutraLista