import {
  MediaRenderer,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
} from "@thirdweb-dev/react";

import { FARMER_ADDRESS, REWARDS_ADDRESS } from "@constant/contratos";
import { ethers } from "ethers";

interface HeroesProps {}

const Heroes: React.FC<HeroesProps> = () => {
  const address = useAddress();

  const { contract: farmercontract } = useContract(FARMER_ADDRESS);
  const { contract: rewardContract } = useContract(REWARDS_ADDRESS);

  const { data: ownedFarmers } = useOwnedNFTs(farmercontract, address);

  const { data: rewardBalance } = useContractRead(rewardContract, "balanceOf", [
    address,
  ]);

  return (
    <div>
      <h1>Heroes:</h1>
      <div>
        <div>
          {ownedFarmers?.map((nft) => (
            <div key={nft.metadata.id}>
              <MediaRenderer
                src={nft.metadata.image}
                height="100%"
                width="100%"
              />
            </div>
          ))}
        </div>
        <div>
          <p style={{ fontSize: "small", fontWeight: "bold" }}>$Balance:</p>
          {rewardBalance && (
            <p>{ethers.utils.formatUnits(rewardBalance, 18)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Heroes;
