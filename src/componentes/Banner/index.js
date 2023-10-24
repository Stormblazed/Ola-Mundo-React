import styles from './Banner.module.css'
import circulocolorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo} >
                Bem-vindo ao meu espaço pessoal! Eu sou Wallace Bessa, conhecido na internet como 'StormBlazed'. Aqui compartilho diversos conhecimentos. Espero que aprendam algo novo 😊
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circulocolorido}
                    aria-hidden={true}/>

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Avatar do Stormblazed.'
                    />
                
            </div> 
        </div>
    )

}