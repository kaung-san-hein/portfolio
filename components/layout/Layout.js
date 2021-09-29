import Head from "next/head";
import Footer from "./Footer";
import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kaung San Hein</title>
        <meta
          name="description"
          content="official portfolio website of Kaung San Hein"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
