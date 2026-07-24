import styles from "./Button.module.css";

function Button() {
  let myPlatforms = {
    github: {
      icon: "src/assets/github.png",
      platformName: "Github",
      url: "https://github.com/mateusleitao",
    },
    linkedIn: {
      icon: "src/assets/linkedin.png",
      platformName: "LinkedIn",
      url: "https://www.linkedin.com/in/mateusleitaoelpidio/",
    },
  };

  return (
    <>
      <div className={styles.btnContainer}>
        {Object.entries(myPlatforms).map(([key, platform]) => (
          <a
            key={key}
            href={platform.url}
            target="_blank"
            className={styles.btnPlatform}
            alt={platform.platformName}
          >
            <span>
              <img src={platform.icon} alt={platform.platformName} />
            </span>
            {/* <p>{platform.platformName}</p> */}
          </a>
        ))}
      </div>
    </>
  );
}

export default Button;
