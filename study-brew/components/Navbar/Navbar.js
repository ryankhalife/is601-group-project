import styles from "./Navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const active = router.pathname;
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <div className={`${styles.navbar} container`}>
      <div className={styles.logoContainer}>
        <Image src="/studybrew-logo.png" alt="Study Brew Logo" width={175} height={170} />
      </div>
      <div className={styles.linkContainer}>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className={`${styles.link} ${router.pathname === href ? styles.active : ""}`}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
