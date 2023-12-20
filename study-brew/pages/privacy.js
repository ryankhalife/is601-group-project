import styles from "../styles/Privacy.module.css";
import { markdownToHtml } from "../lib/markdownToHtml";

export async function getStaticProps() {
  const content = await markdownToHtml("privacy.md");
  return {
    props: {
      html: content,
    },
  };
}

export default function Privacy({ html }) {
  return (
    <div className={styles.privacy}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
