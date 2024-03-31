import { ThirdwebProvider } from "@thirdweb-dev/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThirdwebProvider>
      
      {children}
    </ThirdwebProvider>
  );
};

export default Layout;
