import { Button, Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import beans from "../public/beans.png";
import espresso from "../public/espresso.png";

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
      <div className={`${styles.readmore} container`}>
        <Image src={beans} alt="Picture of dark roasted coffee beans" width={922} height={357} className={styles.readmoreImage} />
        <div className={styles.readmoreText}>
          <h2>Rich. Intense. Indulgent.</h2>
          <p>
            Enhanced by smoky and toasty undertones, our distinctive dark roasts embody our unique identity. Through our expert roasting
            process, we unveil the profound, chocolatey sweetness of the beans, resulting in a decadently intricate coffee experience.
          </p>
          <Button size="lg" variant="shadow" color="warning">
            Read More
          </Button>
        </div>
      </div>
      <div className={styles.menu}>
        <div className="container">
          <h1>Popular Menu</h1>
          <div className={styles.cardsContainer}>
            <Card classNames={{ base: styles.card, header: styles.cardHeader, body: styles.cardBody }}>
              <CardHeader>
                <Image src={espresso} alt="Espresso" width={250} height={250} />
              </CardHeader>
              <CardBody>
                <h3>Espresso</h3>
                <p>
                  Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated,
                  syrup-like coffee drink.
                </p>
                <p>Ratings 5.0</p>
                <p>+ JUST $1.99</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
