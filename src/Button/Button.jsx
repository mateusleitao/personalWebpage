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
      {Object.entries(myPlatforms).map(([key, value]) => (
        <div key={key} className={styles.buttonContainer}>
          <h3>{value.platformName}</h3>
        </div>
      ))}
    </>
  );
}

export default Button;
