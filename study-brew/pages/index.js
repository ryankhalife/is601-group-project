import { Button, image } from "@nextui-org/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import beans from "../public/beans.png";
import espresso from "../public/espresso.png";
import cappuccino from "../public/cappuccino.png";
import blackcoffee from "../public/blackcoffee.png";
import coldbrew from "../public/coldbrew.png";
import MenuCard from "../components/MenuCard/MenuCard";

export default function Home() {
  const menu = [
    {
      imagePath: espresso,
      imageDescription: "Picture of espresso",
      title: "Espresso",
      description:
        "Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink.",
      price: "1.99",
    },
    {
      imagePath: cappuccino,
      imageDescription: "Picture of capuccino",
      title: "Capuccino",
      description: "Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts",
      price: "2.49",
    },
    {
      imagePath: blackcoffee,
      imageDescription: "Picture of black coffee",
      title: "Black Coffee",
      description:
        "Black coffee, Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press",
      price: "1.99",
    },
    {
      imagePath: coldbrew,
      imageDescription: "Picture of cold brew",
      title: "Cold Brew",
      description:
        "Cold brew coffee is created by   coarsely ground coffee in room temperature water for period, often 12 hours or more. using cooler temperatures and longer brewing times,",
      price: "1.99",
    },
  ];
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
        <h1>Popular Menu</h1>
        <div className="container">
          <div className={styles.cardsContainer}>
            {menu.map(({ imagePath, imageDescription, title, description, rating, price }) => {
              return (
                <MenuCard
                  imagePath={imagePath}
                  imageDescription={imageDescription}
                  title={title}
                  description={description}
                  rating={rating}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
