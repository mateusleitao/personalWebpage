import styles from "./Hero.module.css";
import githubIcon from "../assets/gh.svg";
import linkedInIcon from "../assets/linkedIn.svg";

function Hero() {
  const platforms = [
    {
      name: "Github",
      url: "https://www.github.com/mateusleitao",
      iconPath: githubIcon,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mateusleitaoelpidio",
      iconPath: linkedInIcon,
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
