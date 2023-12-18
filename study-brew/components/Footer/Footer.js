import styles from "./Footer.module.css";
import background from "../../public/footer.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.section}>
          <h3>Useful Links</h3>
          <ul>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Lets Help You</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
