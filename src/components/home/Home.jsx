import capa from '../../assets/capa.png'
import styles from './home.module.css'

function Home(){
    return(
        <div className={styles.header}>
            <h1>
            Projeto Pedagógico Interdisciplinar Pretagogiando.
            </h1>
            <img src={capa} />
        </div>
    )
}

export default Home