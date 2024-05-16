import sliderPrincipal from "@img/bg-shop.jpg";
import Header from "@/components/layout/Header";
import ImgBg from "@/components/nano/ImgBg";
import {
  ConnectWallet,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";

import Heroes from "./Heroes";
import Inventary from "./Inventory";
import Equipped from "./Equipped";
import { FARMER_ADDRESS } from "@/constants/contratos";

import ClaimFarmer from "./ClaimFarmer";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const address = useAddress();
  const { contract: farmercontract } = useContract(FARMER_ADDRESS);

  const { data: ownedFarmers } = useOwnedNFTs(farmercontract, address);

  return (
    <ImgBg src={sliderPrincipal} idBg="bgHome">
      <Header />
      <main>
        <div className="content">
          {address !== undefined ? (
            ownedFarmers?.length === 0 ? (
              <div className="container-claimFarmer">
                <ClaimFarmer />
              </div>
            ) : (
              <>
                <div className="container-heroes-inventario">
                  <Heroes />
                  <Inventary />
                </div>
                <div className="container-equipo">
                  <Equipped />
                </div>
              </>
            )
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
