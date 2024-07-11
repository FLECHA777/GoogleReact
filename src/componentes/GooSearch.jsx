import styles from './GooSearch.module.css'
import GooImg from './img/goog.svg'
import { GoSearch } from "react-icons/go";

function GooSearch(){
    return(
        <div className={styles.image}>
            <img src={GooImg} alt='erro'/>
            <nav className={styles.search}>
                <button className={styles.buttonS}>
                    <GoSearch size={10} color='#7b7b7b' />
                    </button>
                <input type="text" placeholder="Pesquise no Google ou digite um URL"/>
            </nav>
        </div>
    )
}

export default GooSearch