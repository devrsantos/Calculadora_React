import { Button } from "./Button";
import styles from "./Keyboard.module.css";

import divisionLogo from "./../assets/Division.svg";
import porcentLogo from "./../assets/Porcent.svg";
import parentsLogo from "./../assets/Parents.svg";
import multiplicationLogo from "./../assets/Multiplication.svg";
import subtrationLogo from "./../assets/Subtraction.svg";
import additionLogo from "./../assets/Addition.svg";

const KeyBoard = () => {

  function alertClick() {
    console.log(event?.target.textContent);
  }

  function handleClickClear() {
    console.log("Clear clicked");
  }

  function handleClickPorcent() {
    console.log("Porcent clicked");
  }

  function handleClickDivision() {
    console.log("Division clicked");
  }

  function handleClickMultiplication() {
    console.log("Multiplication clicked");
  }

  function handleClickSubtraction() {
    console.log("Subtraction clicked");
  }

  function handleClickAddition() {
    console.log("Addition clicked");
  }

  function handleClickAmount() {
    console.log("Amount clicked");
  }

  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <Button onClick={handleClickClear} value={"C"} clear>C</Button>
        <Button onClick={""} value={<img src={parentsLogo} />}>()</Button>
        <Button onClick={handleClickPorcent} value={<img src={porcentLogo} />}></Button>
        <Button onClick={handleClickDivision} value={<img src={divisionLogo} />}></Button>
      </div>
      <div className={styles.line}>
        <Button onClick={alertClick} value={"7"}></Button>
        <Button onClick={alertClick} value={"8"}></Button>
        <Button onClick={alertClick} value={"9"}></Button>
        <Button onClick={handleClickMultiplication} value={<img src={multiplicationLogo} />}></Button>
      </div>
      <div className={styles.line}>
        <Button onClick={alertClick} value={"4"}></Button>
        <Button onClick={alertClick} value={"5"}></Button>
        <Button onClick={alertClick} value={"6"}></Button>
        <Button onClick={handleClickSubtraction} value={<img src={subtrationLogo} />}></Button>
      </div>
      <div className={styles.line}>
        <Button onClick={alertClick} value={"1"}></Button>
        <Button onClick={alertClick} value={"2"}></Button>
        <Button onClick={alertClick} value={"3"}></Button>
        <Button onClick={handleClickAddition} value={<img src={additionLogo} />}></Button>
      </div>
      <div className={styles.line}>
        <Button onClick={alertClick} value={"+/-"}></Button>
        <Button onClick={alertClick} value={"0"}></Button>
        <Button onClick={alertClick} value={"."}></Button>
        <Button onClick={handleClickAmount} value={"="} total></Button>
      </div>
    </div>
  );
};

export { KeyBoard };
