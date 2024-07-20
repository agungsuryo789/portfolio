import React from 'react';

interface CardImageProps {
  src: string;
  alt: string;
}

const CardImage: React.FC<CardImageProps> = ({ src, alt }) => {
  return (
    <img className="w-full" src={src} alt={alt} />
  );
};

export default CardImage;
