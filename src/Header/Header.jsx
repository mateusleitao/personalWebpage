import styles from "./Header.module.css";

function Header() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.pagelist}>
        <li>
          <a href="https://github.com/mateusleitao" target="_blank">
            Github
          </a>
        </li>
        {/* <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="lyrics.html">Lyrics</a>
            </li> */}
      </ul>
    </nav>
  );
}

export default Header;
