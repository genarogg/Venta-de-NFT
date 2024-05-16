import React, { useEffect } from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
 /*  const address = useAddress(); */

  return (
    <header className="header">
      <div className="desktop">
        <h2>Defender Warriors</h2>
        <nav>
          <ul>
            <li>
              <a href="/">Play</a>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/withdraw">Withdraw</Link>
            </li>
            <li>
              <ConnectWallet className="wallet" btnTitle="wallet" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
