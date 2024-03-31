// Home.tsx

import Image from "next/image";
import gg from "../../../img/gg.jpg";

import ImgBg from "@/components/nano/ImgBg";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <header></header>
      <ImgBg src={gg}  height="100dvh">
        {/* Aquí van los hijos del componente ImgBg */}
        <p>Hola, este es un texto de prueba.</p>
       
      </ImgBg>
    </>
  );
};

export default Home;
