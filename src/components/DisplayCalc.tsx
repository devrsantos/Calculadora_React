import styles from "./DisplayCalc.module.css";

const DisplayCalc = () => {
  return (
    <div className={styles.container}>
        <div className={styles.amount}>
            <p>2+7</p>
        </div>
        <div className={styles.result}>
            <p>9</p>
        </div>
    </div>
  )
}

export { DisplayCalc }
