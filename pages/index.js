import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>
          Hi, i am Kamasu Paul. Creator of{" "}
          <a href="https://play.google.com/store/apps/details?id=com.quickCodes.quickCodes&hl=en&gl=US">
            QuickCodes
          </a>
          (10k+ downloads) and many others the world might never know about
        </p>
        <p>   
        I tend to think about myself as a creative problem solver, an out-of-the-box thinker, and a lifelong learner.
        </p>
        <p>
        If you're curious to learn more about my projects and read my articles, you can find them easily on <a href="https://github.com/kamasuPaul">GitHub</a> , <a href="https://medium.com/@kamasupaul">Medium</a>, and <a href="https://dev.to/kamasupaul">Dev.to</a>
        </p>
      </section>
      {/* hide blog for now */}
      {true ? (
        ""
      ) : (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Layout>
  );
}
