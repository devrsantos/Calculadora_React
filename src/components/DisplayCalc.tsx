import styles from "./DisplayCalc.module.css";

import timeMachineLogo from "./../assets/Time Machine.svg";
import rulerLogo from "./../assets/Ruler.svg";
import rootLogo from "./../assets/Root.svg";
import backspaceLogo from "./../assets/Backspace.svg";

const DisplayCalc = () => {
  return (
    <div className={styles.container}>
        <div className={styles.amount}>
            <p>2+7</p>
        </div>
        <div className={styles.result}>
            <p>9</p>
        </div>
        <div className={styles.icons}>
          <div className={styles.iconRoles}>
            <span><img src={timeMachineLogo} /></span>
            <span><img src={rulerLogo} /></span>
            <span><img src={rootLogo} /></span>
          </div>
          <div className={styles.iconsBackspace}>
            <span>
              <img src={backspaceLogo} />
            </span>
          </div>
        </div>
    </div>
  )
}

export { DisplayCalc }
