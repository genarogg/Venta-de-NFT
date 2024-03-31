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
}

const ImgBg: React.FC<ImgBgProps> = ({
  src,
  children,
  style,
  width,
  height,
  styleBg,
}) => {
  return (
    <div style={{ position: "relative", overflow: "hidden", width, height }}>
      <Image
        src={src}
        alt="hola"
        objectFit="cover"
        placeholder="blur"
        fill={true}
        style={{ ...styleBg }}
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
