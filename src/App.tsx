import "./global.css";
import styles from "./App.module.css";
import { SystemBar } from "./components/SystemBar";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.display}>
          <SystemBar></SystemBar>
          <div className={styles.displayCalc}></div>
        </div>
        <div className={styles.keyboard}></div>
      </div>
    </div>
  )
}

export { App }
