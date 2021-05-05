import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Axios from "axios";
const apiBaseURL = "https://api.mailbrew.com";

export async function getServerSideProps(context) {
  try {
    const res = await Axios.get(apiBaseURL + `/inbox_source_messages/shared/${process.env.shareId}`);
    const inboxMessage = res.data;
    return { props: { inboxMessage } };
  } catch (err) {
    console.log(err);
    return { props: { error: "error" } };
  }
}

export default function Home(props) {
  console.log(props);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello world</h1>
    </div>
  )
}
