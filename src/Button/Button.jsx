import styles from "./Button.module.css";

function Button() {
  let myPlatforms = {
    github: {
      icon: "x",
      platformName: "Github",
      url: "https://github.com/mateusleitao",
    },
    linkedIn: {
      icon: "Y",
      platformName: "LinkedIn",
      url: "https://www.linkedin.com/in/mateusleitaoelpidio/",
    },
  };

  return (
    <>
      <div className={styles.buttonContainer}>
        {Object.entries(myPlatforms).map(([key, platform]) => (
          <a
            key={key}
            href={platform.url}
            target="_blank"
            className={styles.btnPlatform}
          >
            <span>{platform.icon}</span>
            <span>{platform.platformName}</span>
          </a>
        ))}
      </div>
    </>
  );
}

export default Button;
