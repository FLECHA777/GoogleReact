import styles from './GooSearch.module.css'
import GooImg from './img/goog.svg'
import { GoSearch } from "react-icons/go";
import { FaMicrophone } from "react-icons/fa6";
import { VscDeviceCamera } from "react-icons/vsc";

function GooSearch() {
    return (
        <div className={styles.image}>
            <img src={GooImg} alt='erro' />
            <nav className={styles.search}>
                <button className={styles.buttonS}>
                    <GoSearch size={18} color='#7b7b7b'/>
                </button>
                <input type="text" placeholder="Pesquise no Google ou digite um URL" />
                <div className={styles.twoB}>
                    <button className={styles.twoBs}><FaMicrophone size={18} color='#7b7b7b'/></button>
                    <button className={styles.twoBs}><VscDeviceCamera size={18} color='#7b7b7b'/></button>
                </div>
            </nav>
        </div>
    )
}

export default GooSearch