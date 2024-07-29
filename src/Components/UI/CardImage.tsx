import React from 'react';

interface CardImageProps {
  src: string;
  alt: string;
}

const CardImage: React.FC<CardImageProps> = ({ src, alt }) => {
  return (
    <img className="w-80" src={src} alt={alt} />
  );
};

export default CardImage;
