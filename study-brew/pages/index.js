import { Button, image } from "@nextui-org/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import beans from "../public/beans.png";
import espresso from "../public/espresso.png";
import cappuccino from "../public/cappuccino.png";
import blackcoffee from "../public/blackcoffee.png";
import coldbrew from "../public/coldbrew.png";
import MenuCard from "../components/MenuCard/MenuCard";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";
import emma from "../public/emma.png";
import samantha from "../public/samantha.png";
import alex from "../public/alex.png";
import reward from "../public/reward.png";

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

  const testimonials = [
    {
      imagePath: emma,
      imageDescription: "Picture of Emma",
      name: "Emma",
      major: "Law Student",
      rating: 5,
      review:
        "I was looking for a quiet and cozy place to study for my finals, and The Study Brew has exceeded my expectations. The noise level is always low, the lighting is just right, and the seats are comfortable for hours of studying.",
    },
    {
      imagePath: samantha,
      imageDescription: "Picture of Samantha",
      name: "Samantha",
      major: "English Literature Student.",
      rating: 4,
      review:
        "I absolutely love the community vibe at The Study Brew. I've met more classmates here than I have on campus! It's a great place to unwind, grab a fantastic cup of joe, and even finish a few chapters of reading.",
    },
    {
      imagePath: alex,
      imageDescription: "Picture of Alex",
      name: "Alex",
      major: "Computer Science Major.",
      rating: 4.5,
      review:
        "The Study Brew is my new go-to spot for late-night cramming. The ambiance is perfect for focusing, and their coffee packs the punch I need to keep going. Plus, their student discounts really make a difference for my wallet!",
    },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <p className={styles.heroText1}>
            Fuel Your Success at The Study Brew: Enjoy Student Discounts on Specialty Coffee in Our Inspiring Study Space!
          </p>
          <Button size="lg" variant="shadow">
            Redeem Your Free Coffee Today!
          </Button>
          <p className={styles.heroText2}>*Limited time offer till Dec31st- act now!</p>
        </div>
      </section>
      <section className={`${styles.readmore} container`}>
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
      </section>
      <section className={styles.menu}>
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
      </section>
      <section className={styles.testimonials}>
        <h1>Join 1,000+ scholars at their beloved Study Brew haven!</h1>
        <div className="container">
          <div className={styles.testimonialsContainer}>
            {testimonials.map(({ imagePath, imageDescription, name, major, rating, review }) => {
              return (
                <TestimonialCard
                  imagePath={imagePath}
                  imageDescription={imageDescription}
                  name={name}
                  major={major}
                  rating={rating}
                  review={review}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles.reward}>
        <Image src={reward} alt="Join the Study Brew Rewards" width={658} height={229} />
        <Button size="lg" variant="shadow" color="warning" onClick={() => window.open("http://eepurl.com/iGtKLU", "_self")}>
          Unlock your exclusive Brew Insider perks: a free large coffee awaits, plus endless refills — all at your fingertips when you{" "}
          <span>sign up</span> now!
        </Button>
      </section>
    </>
  );
}
