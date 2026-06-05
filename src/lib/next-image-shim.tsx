import * as React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

export default function Image({ src, alt, fill, className, style, ...props }: ImageProps) {
  const fillStyles: React.CSSProperties = fill
    ? {
        position: "absolute" as const,
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: "cover" as const,
      }
    : {};

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ ...fillStyles, ...style }}
      {...props}
    />
  );
}
