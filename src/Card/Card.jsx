import styles from "./Card.module.css";
import Button from "../Button/Button";

function Card() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.card}>
          <div className={styles.textBox}>
            <h1>Hi, I am Lange</h1>
            <p>
              Every update on this page is being recorded on its respective
              repository.
            </p>
            <Button></Button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Card;
