// Home.tsx

import Image from "next/image";
import sliderPrincipal from "@img/slider-principal.jpg";
import Header from "@/components/layout/Header";
import ImgBg from "@/components/nano/ImgBg";

import Layout from "@layout";
interface HomeProps {}
import { ConnectWallet } from "@thirdweb-dev/react";

const Home: React.FC<HomeProps> = () => {
  return (
    <Layout>
      <ImgBg src={sliderPrincipal} height="100dvh">
        <Header />

        <main>
 
          <div className="content">
            <h2>Defender Warriors</h2>
            <p>Defend the world with your NFTs</p>
            <ConnectWallet className="wallet" />
          </div>
        </main>
      </ImgBg>
    </Layout>
  );
};

export default Home;
