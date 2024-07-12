import Styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={Styles.footer}>
            <div>
                <p>Brasil</p>
            </div>
            <div>
                <ul>
                    <li><a>Sobre</a></li>
                    <li><a>Publicidade</a></li>
                    <li><a>Negócios</a></li>
                    <li><a>Como funciona a Pesquisa</a></li>
                </ul>
                <ul>
                    <li><a>Privacidade</a></li>
                    <li><a>Termos</a></li>
                    <li><a>Configurações</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer