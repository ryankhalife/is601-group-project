import styles from "./Title.module.css";

export default function Title({ title }) {
  return (
    <div className={styles.title}>
      <div className={styles.line} />
      <h1>{title}</h1>
      <div className={styles.line} />
    </div>
  );
}
