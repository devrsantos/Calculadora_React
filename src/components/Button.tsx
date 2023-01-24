import styles from "./Button.module.css";

const Button = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles.container}
    >{value}</button>
  );
};

export { Button };
