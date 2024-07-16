import Styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={Styles.footer}>
            <div className={Styles.brasil}>
                <p>Brasil</p>
            </div>
            <div className={Styles.footer2}>
                <ul>
                    <li><a href="www.gmail.com">Sobre</a></li>
                    <li><a href="www.gmail.com">Publicidade</a></li>
                    <li><a href="www.gmail.com">Negócios</a></li>
                    <li><a href="www.gmail.com">Como funciona a Pesquisa</a></li>
                </ul>
                <ul className={Styles.ulF}>
                    <li><a href="www.gmail.com">Privacidade</a></li>
                    <li><a href="www.gmail.com">Termos</a></li>
                    <li><a href="www.gmail.com">Configurações</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer