import Styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={Styles.footer}>
            <div className={Styles.brasil}>
                <p>Brasil</p>
            </div>
            <div className={Styles.footer2}>
                <ul>
                    <li><a href=''>Sobre</a></li>
                    <li><a href=''>Publicidade</a></li>
                    <li><a href=''>Negócios</a></li>
                    <li><a href=''>Como funciona a Pesquisa</a></li>
                </ul>
                <ul className={Styles.ulF}>
                    <li><a href=''>Privacidade</a></li>
                    <li><a href=''>Termos</a></li>
                    <li><a href=''>Configurações</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer