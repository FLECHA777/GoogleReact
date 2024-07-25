import Styles from './Button.module.css'

function Button(){

    return(
        <div className={Styles.btn}>
          <button type="button">Pesquisa Google</button>  
          <button type="button">Estou com Sorte</button>  
        </div>
    )
}

export default Button