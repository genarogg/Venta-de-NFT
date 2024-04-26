import sliderPrincipal from "@img/bg-shop.jpg";
import Header from "@/components/layout/Header";
import ImgBg from "@/components/nano/ImgBg";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

import Heroes from "./Heroes";
import Inventary from "./Inventory";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const address = useAddress();

  return (
    <ImgBg src={sliderPrincipal}>
      <Header />
      <main>
        <div className="content">
          {address !== undefined ? (
            <div className="container-heroes-inventario">
              <Heroes />
              <Inventary />
            </div>
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
