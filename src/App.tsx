import "./global.css";
import styles from "./App.module.css";
import { SystemBar } from "./components/SystemBar";
import { KeyBoard } from "./components/KeyBoard";
import { Button } from "./components/Button";
import { DisplayCalc } from "./components/DisplayCalc";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.display}>
          <SystemBar></SystemBar>
          <div className={styles.displayCalc}>
            <DisplayCalc></DisplayCalc>
          </div>
        </div>
        <hr className={styles.designLine} />
        <div className={styles.keyboard}>
          
          <KeyBoard></KeyBoard>
          <footer>
            <div className={styles.microphone}></div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export { App };
