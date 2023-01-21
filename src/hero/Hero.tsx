import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Code Image Generator</h1>
      <p className={styles.description}>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}
