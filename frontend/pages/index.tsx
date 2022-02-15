import Head from "next/head";
import DefaultLayout from "../components/layouts/default";
import Footer from "../components/layouts/footer";
import HeaderResponsive from "../components/layouts/header";
import Banner from "../components/ui/banner";
import EarlyNFT from "../components/ui/early-nft";
import RareItem from "../components/ui/rare-item";
import Sponsor from "../components/ui/sponsor";

export default function Home() {
  return (
    <>
      <Head>
        <title>NTF Landing Page.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderResponsive />

      <DefaultLayout>
        <Banner />
        <EarlyNFT />

        <Sponsor />

        <RareItem />

      </DefaultLayout>

      <Footer />
    </>
  );
}
