import styles from "./Hero.module.css"
import githubIcon from "../assets/gh.svg"
import linkedInIcon from "../assets/linkedIn.svg"
import devtoIcon from "../assets/devto.svg"

const platforms = [
  {
    name: "GitHub",
    url: "https://www.github.com/mateusleitao",
    iconPath: githubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mateusleitaoelpidio",
    iconPath: linkedInIcon,
  },
  {
    name: "Dev.to",
    url: "https://dev.to/mateuslange",
    iconPath: devtoIcon,
  },
]

function Hero() {
  return (
    <section className={styles.heroContainer} aria-labelledby="intro-heading">
      <div className={styles.hero}>
        <h1 id="intro-heading" className={styles.greetings}>
          <span className={styles.greetingsPrefix}>Hi, I&apos;m</span> Lange
        </h1>
        <p className={styles.aboutMe}>
          I am a <strong>web developer</strong>. You can find me and explore my
          projects on:
        </p>
        <ul className={styles.heroLinkList} aria-label="Social profiles">
          {platforms.map((platform) => (
            <li key={platform.name}>
              <a
                href={platform.url}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label={`${platform.name} profile`}
                className={styles.platformBtn}
              >
                <img
                  src={platform.iconPath}
                  alt=""
                  aria-hidden="true"
                  width="50"
                  height="50"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero
