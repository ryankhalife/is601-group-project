import styles from "./Press.module.css";
import Image from "next/image";

export default function Press({ title, body, imagePath, imageDescription }) {
  return (
    <div className={styles.press}>
      <Image src={imagePath} alt={imageDescription} />
      <div className={styles.text}>
        <p>
          <span>{title}</span> {body}
        </p>
      </div>
    </div>
  );
}
