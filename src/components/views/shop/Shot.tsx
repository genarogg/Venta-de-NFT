import { useContract, useNFTs } from "@thirdweb-dev/react";
import { TOOLS_ADDRESS } from "@constant/contratos";
import { NFT as NFTType } from "@thirdweb-dev/sdk";
import Header from "@/components/layout/Header";
import sliderPrincipal from "@img/bg-shop.jpg";
import ImgBg from "@/components/nano/ImgBg";
import NFT from "./NFTCard";

import {
  MediaRenderer,
  Web3Button,
  useActiveClaimCondition,
} from "@thirdweb-dev/react";

interface ShopProps {}

const Shop: React.FC<ShopProps> = () => {
  const { contract } = useContract(TOOLS_ADDRESS);
  const { data: nfts } = useNFTs(contract);

  return (
    <ImgBg
      src={sliderPrincipal}
      className="shop"

    >
      <Header />
      <main>
        <div className="titulo">
          <h1>Shop</h1>
          <p>Buy Monsters to attack with $DW to increase your profits.</p>
        </div>
        {!nfts ? (
          <div
            style={{
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Loading...
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
            }}
          >
            {nfts?.map((nftItem) => (
              <NFT key={nftItem.metadata.id} nft={nftItem} />
            ))}
          </div>
        )}
      </main>
    </ImgBg>
  );
};

export default Shop;
