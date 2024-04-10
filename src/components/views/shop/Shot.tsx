import { useContract } from "@thirdweb-dev/react";
import { TOOLS_ADDRESS } from "@constant/contratos";

interface ShopProps {}

const Shop: React.FC<ShopProps> = () => {
  const { contract } = useContract('0x603969FC42AC4c278Cf500C887Dd91fcD5b71bd4');
  console.log(TOOLS_ADDRESS)
  console.log(contract)

  return (
    <div style={{ backgroundImage: `url()`, height: "100vh" }}>
     
    </div>
  );
};

export default Shop;