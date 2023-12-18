import styles from "../styles/About.module.css";
import Title from "../components/Title/Title";
import Image from "next/image";
import about from "../public/about.png";

export default function About() {
  return (
    <main className={styles.about}>
      <section className={`${styles.aboutus}  container`}>
        <Title title="About Us" />
        <div className={styles.aboutContent}>
          <div>
            <Image src={about} width={500} height={500} />
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
    </main>
  );
}
