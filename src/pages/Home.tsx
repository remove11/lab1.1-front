import styles from './Style/Style.module.css';

const Home = () => {
    return (
        <div className={styles.Container}>
            <h1 className={styles.Title}>Home Page</h1>
            <h4>Bare minimum, done!</h4>

            <div className={styles.ContainerB}>
            <button className={styles.Button}>Login</button>
            <button className={styles.Button}>Register</button>
            
            </div>
       
            
        </div>
    )
}

export default Home;