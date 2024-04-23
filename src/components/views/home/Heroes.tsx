

interface HeroesProps {}

const Heroes: React.FC<HeroesProps> = () => {
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
