import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900">
      <Head>
        <title>wit-chat | By Bhimraj yadav</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
