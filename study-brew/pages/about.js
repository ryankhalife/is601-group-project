import styles from "../styles/About.module.css";
import Title from "../components/Title/Title";
import Press from "../components/Press/Press";
import Image from "next/image";
import about from "../public/about.png";
import value from "../public/value.png";
import press1 from "../public/press1.png";
import press2 from "../public/press2.png";
import press3 from "../public/press3.png";

export default function About() {
  const press = [
    {
      title: "Awarded 'Best Campus Coffee Shop' by University Town Magazine:",
      body: "In 2022, \"The Study Brew\" was honored with the 'Best Campus Coffee Shop' award for its exceptional service, quality coffee, and dedication to creating a student-friendly environment.",
      imagePath: press1,
      imageDescription: "Press image",
    },
    {
      title: "Sustainability Champion Award by Green Planet Initiative:",
      body: ' Recognizing our efforts in sustainability, from ethically sourced coffee to eco-friendly practices, "The Study Brew" received the Sustainability Champion Award in 2023.',
      imagePath: press2,
      imageDescription: "Press image",
    },
    {
      title: "'Best Community Space' Nomination by Local Business Awards:",
      body: "Our commitment to providing a welcoming space for students and faculty earned us a nomination for the 'Best Community Space' by the Local Business Awards.",
      imagePath: press3,
      imageDescription: "Press image",
    },
  ];
  return (
    <main className={styles.about}>
      <section className={`${styles.aboutus}  container`}>
        <Title title="About Us" />
        <div className={styles.aboutContent}>
          <div>
            <Image src={about} alt="Hot cup of coffee" />
          </div>
          <div>
            <h2>Our Company</h2>
            <p>
              Nestled in the heart of a bustling college town, The Study Brew is more than just a coffee shop; it's a sanctuary for
              students. Our founders, former students themselves, created this space for those seeking a blend of comfort, community, and
              quality coffee. Here, late-night study sessions are fueled by artisanal blends, and every corner is tailored for both
              collaborative and solitary pursuits. At The Study Brew, we're not just part of your daily caffeine routine; we're a chapter in
              your academic journey.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.mission}>
        <div className="container">
          <Title title="Our Mission" />
          <p>
            Our mission is to blend quality coffee with a supportive study environment, fostering a sense of community and academic growth.
            At The Study Brew, we're dedicated to being more than a coffee shop; we're a haven where students can connect, relax, and find
            inspiration. Every cup we serve is a commitment to enhancing your academic journey and nurturing a space where ideas and
            friendships flourish.
          </p>
        </div>
      </section>
      <section className={`${styles.value}  container`}>
        <Title title="Our Value & Personality" />
        <div className={styles.valueContent}>
          <Image src={value} alt="Cups of coffee" />
          <p>
            At The Study Brew, we are grounded in the values of community, sustainability, and academic support. We understand the
            importance of an environmentally conscious approach; hence, our coffee is sourced from sustainable farms, and our practices
            prioritize the planet's well-being. Our personality is a blend of a knowledgeable mentor and a friendly neighbor, always ready
            to offer a comforting space and a listening ear. Building meaningful connections with our student customers and contributing
            positively to their academic and social lives are at the core of our ethos. We are more than a coffee shop; we are a partner in
            the educational journey of our patrons.
          </p>
        </div>
      </section>
      <section className={styles.press}>
        <div className="container">
          <Title title="Press mentions & awards" />
          {press.map(({ title, body, imagePath, imageDescription }, index) => (
            <Press key={title} title={title} body={body} imagePath={imagePath} imageDescription={imageDescription} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
