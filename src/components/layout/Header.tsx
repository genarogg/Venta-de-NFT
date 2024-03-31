import { ConnectWallet } from "@thirdweb-dev/react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="desktop">
        <h2>Defender Warriors</h2>

        <nav>
          <ul>
            <li>
              <a href="#">Play</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <ConnectWallet className="wallet" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
