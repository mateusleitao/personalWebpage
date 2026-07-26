import styles from "./Profile.module.css"

function Profile() {
  return (
    <>
      <div className={styles.pictureContainer}>
        <img src="public/photoOfMine.png" alt="#" className={styles.picture} />
   
      </div>
    </>
  );
}

export default Profile