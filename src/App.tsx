import "./global.css";
import styles from "./App.module.css";
import { SystemBar } from "./components/SystemBar";
import { KeyBoard } from "./components/KeyBoard";
import { Button } from "./components/Button";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.display}>
          <SystemBar></SystemBar>
          <div className={styles.displayCalc}></div>
        </div>
        <div className={styles.keyboard}>
          <KeyBoard></KeyBoard>
        </div>
      </div>
    </div>
  );
};

export { App };
