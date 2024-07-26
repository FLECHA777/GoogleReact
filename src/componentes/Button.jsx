import Styles from './Button.module.css'
import Check from './img/check.svg'

function Button(){

    return(
      <div>
         <div className={Styles.btn}>
          <button type="button">Pesquisa Google</button>  
          <button type="button">Estou com Sorte</button>  
        </div>
        <div className={Styles.check}>
          <img src={Check} alt="erro"/>
          <a href="https://doodles.google/">Faça o Check-up de privacidade </a>
        </div>
      </div>
       
    )
}

export default Button