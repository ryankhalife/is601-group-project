import { Button } from "@nextui-org/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <p className={styles.heroText1}>
            Fuel Your Success at The Study Brew: Enjoy Student Discounts on Specialty Coffee in Our Inspiring Study Space!
          </p>
          <Button size="lg" variant="shadow">
            Redeem Your Free Coffee Today!
          </Button>
          <p className={styles.heroText2}>*Limited time offer till Dec31st- act now!</p>
        </div>
      </div>
    </>
  );
}
