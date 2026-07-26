import styles from "./Profile.module.css";
import langePhoto from "../assets/photoOfMine.png";


function Profile() {
  return (
    <>
      <div className={styles.pictureContainer}>
        <img src={langePhoto} alt="#" className={styles.picture} />
   
      </div>
    </>
  );
}

export default Profile