import { MediaRenderer, Web3Button, useContract, useContractMetadata } from "@thirdweb-dev/react";
import { FARMER_ADDRESS } from "@/constants/contratos";

const ClaimFarmer = () => {
  const { contract } = useContract(FARMER_ADDRESS);
  const { data: metadata } = useContractMetadata(contract);

  return (
    <div
      style={{
        maxWidth: "1200px",
        backgroundImage: `url('/images/Slider_principal.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <h1 style={{ color: "black" }}>
        Claim your HoverBoard to start generating
      </h1>
      <div
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <MediaRenderer src={metadata?.image} height="300px" width="300px" />
      </div>

      <Web3Button
        contractAddress={FARMER_ADDRESS}
        action={(contract) => contract.erc1155.claim(0, 1)}
      >
        Claim HoverBoard
      </Web3Button>
    </div>
  );
};

export default ClaimFarmer;
