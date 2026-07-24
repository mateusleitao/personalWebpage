import styles from "./Card.module.css";

function Card() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.card}>
          <h1>Hi, I am Lange</h1>
          <p>
            First of all, I want to explain what is this page. This page is a
            project of me that look into develop something which is entirely
            autoral, I'm compromised with no using of tools that work for me,
            kinda like any LLM or autocompletion stuff. All the code here is
            entirely built for me, I will not use any framework or software that
            is not on my knowledge, everything used here will be studied before
            applied and I will only apply if I have a comprehension of what I'm
            doing.
          </p>
          <p>
            Every update on this page is being recorded on its respective
            repository, based in: this link at commits section
          </p>
        </div>
      </main>
    </>
  );
}

export default Card;