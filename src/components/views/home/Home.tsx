// Home.tsx

import Image from "next/image";
import sliderPrincipal from "@img/slider-principal.jpg";
import Header from "@/components/layout/Header";
import ImgBg from "@/components/nano/ImgBg";
import { ConnectWallet, useWallet, useAddress } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const address = useAddress();

  return (
    <ImgBg src={sliderPrincipal}>
      <Header />
      <main>
        <div className="content">
          {address !== undefined ? (
            <h1>Hola Mundo</h1>
          ) : (
            <>
              <h2>Defender Warriors</h2>
              <p>Defend the world with your NFTs</p>
              <ConnectWallet className="wallet" />
            </>
          )}
        </div>
      </main>
    </ImgBg>
  );
};

export default Home;
