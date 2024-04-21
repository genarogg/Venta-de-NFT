import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

interface ImgBgProps {
  src: StaticImageData;
  style?: React.CSSProperties;
  children: React.ReactNode;
  width?: string;
  height?: string;
  styleBg?: React.CSSProperties;
  position?: "relative" | "absolute" | "fixed" | "sticky" | "static";
  className?: string; // Agregamos className aquí
}

const ImgBg: React.FC<ImgBgProps> = ({
  src,
  children,
  style,
  width,
  height = "100dvh",
  styleBg,
  position = "relative",
  className, // Y aquí
}) => {
  return (
    <div
      className={className} // Usamos className en el div padre
      style={{
        width,
        height,
      }}
    >
      <Image
        src={src}
        alt="hola"
        objectFit="cover"
        placeholder="blur"
        fill={true}
        style={{ ...styleBg }}
        id="shopBg"
     
      />
      <div
        className="content"
        style={{ zIndex: 10, position: "relative", ...style }}
      >
        {children}
      </div>
    </div>
  );
};

export default ImgBg;
