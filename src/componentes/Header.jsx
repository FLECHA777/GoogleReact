import styles from './Header.module.css'
import Dots from './img/dots.svg'
import Person from './img/person.jpg'

function Header(){
    return(
    <div className={styles.header}>
        <div><a href="www.gmail.com">Gmail</a>
        </div>
        <div><a href="www.imagens.com">Imagens</a>
        </div>
        <div className ="dots">
            <img src={Dots} alt='erro' width='20px'></img>
        </div>
        <div className={styles.profile}>
            <img src={Person} alt="erro" width='20px'></img>
        </div>
    </div>
    )

}

export default Header