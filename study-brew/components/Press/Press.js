import styles from "./Press.module.css";
import Image from "next/image";

export default function Press({ title, body, imagePath, imageDescription, index = 0 }) {
  return (
    <div className={`${styles.press} ${index % 2 == 1 ? styles.flip : null}`}>
      <Image src={imagePath} alt={imageDescription} />
      <div className={styles.text}>
        <p>
          <span>{title}</span> {body}
        </p>
      </div>
    </div>
  );
}
