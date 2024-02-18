import Image from "next/image";
import Link from "next/link";
import ExternalLink from "../components/ExternalLink/ExternalLink";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={`${styles.main} container`}>
      <div className={styles.description}>
        <h1>From Down Undah</h1>
        <p>
          A collection of awesome things from{" "}
          <ExternalLink href="https://github.com/ckhawks">
            Stellaric
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink href="https://github.com/guitars12">
            guitars12
          </ExternalLink>
          .
        </p>

        <h2>Projects</h2>
        <Link href="/messages" className={`button`}>
          Messages
        </Link>
      </div>
    </div>
  );
}
