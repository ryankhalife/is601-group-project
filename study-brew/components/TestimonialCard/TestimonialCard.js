import styles from "./TestimonialCard.module.css";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";

export default function TestimonialCard({ imagePath, imageDescription, name, major, rating, review }) {
  // clip rating between 0 and 5 with step size 0.5
  rating = Math.min(Math.max(rating, 0), 5);
  rating = Math.round(rating * 2) / 2;

  return (
    <Card classNames={{ base: styles.card, header: styles.cardHeader, body: styles.cardBody }}>
      <CardHeader>
        <Image src={imagePath} alt={imageDescription} width={150} height={150} />
        <div>
          <h3>- {name}</h3>
          <p>{major}</p>
          <div className={styles.starsContainer}>
            {Array(Math.floor(rating)).fill(<span className={styles.star}>&#9733;</span>)}
            {rating % 1 !== 0 ? <span className={styles.halfStar}>&#9733;</span> : null}
            {Array(Math.floor(5 - rating)).fill(<span className={styles.emptyStar}>&#9733;</span>)}
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <p>"{review}"</p>
      </CardBody>
    </Card>
  );
}
