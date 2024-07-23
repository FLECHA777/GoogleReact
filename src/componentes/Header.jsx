import styles from './Header.module.css'
import Dots from './img/dots.svg'
import Person from './img/person.jpg'

function Header(){
    return(
    <div className={styles.header}>
        <div><a href="https://www.gmail.com" target='_blank' rel="noreferrer">Gmail</a>
        </div>
        <div><a href="https://images.google.com" target='_blank' rel="noreferrer">Imagens</a>
        </div>
        <div className ="dots">
            <img src={Dots} alt='erro' width='33px'></img>
        </div>
        <div className={styles.profile}>
            <img src={Person} alt="erro" width='44px'></img>
        </div>
    </div>
    )

}

export default Header