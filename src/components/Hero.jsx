import styles from "./Hero.module.css";

function Hero() {
  const platforms = [
    {
      name: "Github",
      url: "https://www.github.com/mateusleit",
      iconPath: "src/assets/gh.svg",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mateusleitaoelpidio",
      iconPath: "src/assets/linkedIn.svg",
    },
  ];

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.hero}>
          <span className={styles.greetings}>
            <span className={styles.greetingsPrefix}>Hi, I'm</span> Lange
          </span>
          <p className={styles.aboutMe}>
            I am <span>Web Developer</span>. You can find me and check my
            projects at:
          </p>
          <ul className={styles.heroLinkList}>
            {platforms.map((platforms) => (
              <li key={platforms}>
                <a
                  href={platforms.url}
                  target="_blank"
                  className={styles.platformBtn}
                >
                  <img src={platforms.iconPath} alt="#" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Hero;
