import styles from "./Button.module.css";

const Button = ({clear = false, total = false, value, onClick }) => {
  function colorButton(params1: boolean, params2: boolean): string | undefined {
    if (!params1 && !params2) {
      return styles.container
    } else if (params1 && !params2) {
      return styles.clear
    } else if (!params1 && params2) {
      return styles.amount
    }
  }
  return (
    <button
      onClick={onClick}
      className={colorButton(clear, total)}
    >{value}</button>
  );
};

export { Button };
