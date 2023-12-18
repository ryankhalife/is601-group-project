import styles from "./MenuCard.module.css";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";

export default function MenuCard({ imagePath, imageDescription, title, description, rating = "5.0", price }) {
  return (
    <Card classNames={{ base: styles.card, header: styles.cardHeader, body: styles.cardBody }}>
      <CardHeader>
        <Image src={imagePath} alt={imageDescription} width={250} height={250} />
      </CardHeader>
      <CardBody>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Ratings {rating}</p>
        <p>+ JUST ${price}</p>
      </CardBody>
    </Card>
  );
}
