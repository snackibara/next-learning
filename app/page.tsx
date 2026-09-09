/*
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>
            To get started, edit the{" "}
            <code className={styles.code}>page.tsx</code> file.
          </h1>
          <p>
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
*/
import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

const data: {
  contents: News[] } = {
    contents: [
      {
        id: "1",
        title: "れれれれれーーーーー",
        category: {
          name: "update",
        },
        publishedAt: "2026/08/25",
        createdAt: "2026/08/25",
      },
      {
        id: "2",
        title: "ルールルルル",
        category: {
          name: "update",
        },
        publishedAt: "2026/08/25",
        createdAt: "2026/08/25",
      },
      {
        id: "3",
        title: "ラーララララ",
        category: {
          name: "update",
        },
        publishedAt: "2026/08/25",
        createdAt: "2026/08/25",
      },
    ]
  };


export default function Home() {
  const sliceData = data.contents.slice(0, 2);

  return (
    <>
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>テクノロジーの力でわわわわわー</h1>
        <p className={styles.description}>
          わわわわわわわわわわわわわーーーーーーーー
        </p>
      </div>
      <Image
      className={styles.bgimg}
      src="/img-mv.jpg"
      alt=""
      width={4000}
      height={1200}
      />
    </section>
    <section className={styles.news}>
      <h2 className={styles.newsTitle}>News</h2>
      <NewsList news={sliceData} />
      <div className={styles.newsLink}>
        <ButtonLink href="news">もっとみる</ButtonLink>
      </div>
    </section>
    </>
  );
}