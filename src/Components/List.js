import Item from './Item'

function List(){
    return(
        <div>
           <h1>Minha Lista:</h1> 
           <ul>
            <Item marca = "Ferrari" ano_lancamento = {1921}/>  
            <Item marca = "Lexus"  ano_lancamento = {1981}/> 
            <Item marca = "Bugati" ano_lancamento = {2021}/> 
            <Item/>
           </ul>
        </div>

    )
}

export default List