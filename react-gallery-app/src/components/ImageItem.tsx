// src/components/ImageItem.tsx

import React from 'react';
import { Image } from '../types';

interface ImageItemProps {
  image: Image;
  onClick: () => void;
}

const ImageItem: React.FC<ImageItemProps> = ({ image, onClick }) => {
  return (
    <div className="image-item" onClick={onClick}>
      <img src={image.url} alt={image.title} />
      <h3>{image.title}</h3>
    </div>
  );
};

export default ImageItem;