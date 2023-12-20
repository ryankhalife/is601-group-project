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
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div>
          <p>Ratings {rating}</p>
          <p>+ JUST ${price}</p>
        </div>
      </CardBody>
    </Card>
  );
}
