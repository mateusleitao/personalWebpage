import styles from "./Profile.module.css"
import langePhoto from "../assets/photoOfMine.png"
import langePhotoAvif from "../assets/photoOfMine.avif"
import langePhotoAvifSmall from "../assets/photoOfMine-720.avif"
import langePhotoWebp from "../assets/photoOfMine.webp"
import langePhotoWebpSmall from "../assets/photoOfMine-720.webp"

function Profile() {
  return (
    <div className={styles.pictureContainer}>
      <picture>
        <source
          type="image/avif"
          srcSet={`${langePhotoAvifSmall} 720w, ${langePhotoAvif} 1448w`}
          sizes="(max-width: 47.9375rem) 120px, 50vw"
        />
        <source
          type="image/webp"
          srcSet={`${langePhotoWebpSmall} 720w, ${langePhotoWebp} 1448w`}
          sizes="(max-width: 47.9375rem) 120px, 50vw"
        />
        <img
          src={langePhoto}
          alt="Black-and-white portrait of Lange"
          className={styles.picture}
          width="1448"
          height="1086"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
    </div>
  )
}

export default Profile
