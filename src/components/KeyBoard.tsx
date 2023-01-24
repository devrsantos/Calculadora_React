import { Button } from "./Button";
import styles from "./Keyboard.module.css";

import divisionLogo from "./../assets/Division.svg";
import porcentLogo from "./../assets/Porcent.svg";
import parentsLogo from "./../assets/Parents.svg";

const KeyBoard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <Button onClick={""} value={"C"}></Button>
        <Button onClick={""} value={<img src={parentsLogo} />}></Button>
        <Button onClick={""} value={<img src={porcentLogo} />}></Button>
        <Button onClick={""} value={<img src={divisionLogo} />}></Button>
      </div>
      <div className={styles.line}>
        <Button onClick={""} value={"7"}></Button>
        <Button onClick={""} value={"8"}></Button>
        <Button onClick={""} value={"9"}></Button>
        <Button onClick={""} value={<img src={divisionLogo} />}></Button>
      </div>
      <div className={styles.line}>
        <Button onClick={""} value={"4"}></Button>
        <Button onClick={""} value={"5"}></Button>
        <Button onClick={""} value={"6"}></Button>
        <Button onClick={""} value={<img src={divisionLogo} />}></Button>
      </div>
      <div className={styles.line}>
        <Button onClick={""} value={"1"}></Button>
        <Button onClick={""} value={"2"}></Button>
        <Button onClick={""} value={"3"}></Button>
        <Button onClick={""} value={<img src={divisionLogo} />}></Button>
      </div>
      <div className={styles.line}>
        <Button onClick={""} value={<img src={parentsLogo} />}></Button>
        <Button onClick={""} value={"0"}></Button>
        <Button onClick={""} value={"."}></Button>
        <Button onClick={""} value={<img src={divisionLogo} />}></Button>
      </div>
    </div>
  );
};

export { KeyBoard };
