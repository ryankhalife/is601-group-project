import styles from "../styles/Terms.module.css";
import { markdownToHtml } from "../lib/markdownToHtml";

export async function getStaticProps() {
  const content = await markdownToHtml("terms.md");
  return {
    props: {
      html: content,
    },
  };
}

export default function Terms({ html }) {
  return (
    <div className={styles.terms}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
