import styles from "./SystemBar.module.css"

import cellularConnectionLogo from "./../assets/Cellular Connection.svg";
import wifiLogo from "./../assets/Wifi.svg";
import batteryLogo from "./../assets/Battery.svg";

const SystemBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.displayTime}>
            <time className={styles.time}>9:41</time>
        </div>
        <div className={styles.displayStatus}>
            <span>
                <img src={cellularConnectionLogo} />
            </span>
            <span>
                <img src={wifiLogo} />
            </span>
            <span>
                <img src={batteryLogo} />
            </span>
        </div>
    </div>
  )
}

export { SystemBar }
