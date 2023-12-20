import styles from "./TestimonialCard.module.css";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";

export default function TestimonialCard({ imagePath, imageDescription, name, major, rating, review }) {
  // clip rating between 0 and 5 with step size 0.5
  rating = Math.min(Math.max(rating, 0), 5);
  rating = Math.round(rating * 2) / 2;

  let stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(
      <span key={name + i} className={styles.star}>
        &#9733;
      </span>
    );
  }
  if (rating % 1 !== 0) {
    stars.push(
      <span key={name + "half"} className={styles.halfStar}>
        &#9733;
      </span>
    );
  }
  for (let i = 5; i > Math.ceil(rating); i--) {
    stars.push(
      <span key={name + i} className={styles.emptyStar}>
        &#9733;
      </span>
    );
  }

  return (
    <Card classNames={{ base: styles.card, header: styles.cardHeader, body: styles.cardBody }}>
      <CardHeader>
        <Image src={imagePath} alt={imageDescription} width={150} height={150} />
        <div>
          <h2>- {name}</h2>
          <p>{major}</p>
          <div className={styles.starsContainer}>
            {stars.map((star) => {
              return star;
            })}
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <p>"{review}"</p>
      </CardBody>
    </Card>
  );
}
