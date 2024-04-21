import {
  MediaRenderer,
  Web3Button,
  useActiveClaimCondition,
  useContract,
} from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import { TOOLS_ADDRESS } from "@constant/contratos";
import { ethers } from "ethers";

type Props = {
  nft: NFT;
};

export default function NFTComponent({ nft }: Props) {
  const { contract } = useContract(TOOLS_ADDRESS);
  const { data, isLoading } = useActiveClaimCondition(
    contract,
    nft.metadata.id // Token ID required for ERC1155 contracts here.
  );

  return (
    <div style={{ overflow: "hidden" }}>
      <MediaRenderer src={nft.metadata.image} height="100%" width="100%" />
      <h2
        style={{
          fontSize: "2em",
          fontWeight: "bold",
          margin: "1em 0",
          textAlign: "center",
        }}
      >
        {nft.metadata.name}
      </h2>
      {!isLoading && data ? (
        <p style={{ textAlign: "center", margin: "1em 0" }}>
          Cost: {ethers.utils.formatEther(data?.price)}
          {" " + data?.currencyMetadata.symbol}
        </p>
      ) : (
        <p>Loading...</p>
      )}
      <Web3Button
        contractAddress={TOOLS_ADDRESS}
        action={(contract) => contract.erc1155.claim(nft.metadata.id, 1)}
        style={{ display: "block", margin: "0 auto" }}
      >
        Buy
      </Web3Button>
    </div>
  );
}
