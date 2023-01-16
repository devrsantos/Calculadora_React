import "./global.css";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.calculadora}>
        <div className={styles.display}></div>
        <div className={styles.teclado}></div>
      </div>
    </div>
  )
}

export { App }
