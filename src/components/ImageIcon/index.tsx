import React from "react";
import Image from "next/image";

interface ImageIconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const ImageIcon: React.FC<ImageIconProps> = ({
  src,
  alt,
  width = 24,
  height = 24,
  className,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default ImageIcon;
