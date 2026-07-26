import styles from "./Profile.module.css"

function Profile() {
  return (
    <>
      <div className={styles.pictureContainer}>
        <img src="src/assets/photoOfMine.png" alt="#" className={styles.picture} />
   
      </div>
    </>
  );
}

export default Profile