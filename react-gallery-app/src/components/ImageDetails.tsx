// src/components/ImageDetails.tsx

import React from 'react';
import { Image } from '../types';

interface ImageDetailsProps {
  image: Image;
}

const ImageDetails: React.FC<ImageDetailsProps> = ({ image }) => {
  return (
    <div className="image-details">
      <h2>{image.title}</h2>
      <img src={image.url} alt={image.title} />
      <p>{image.description}</p>
    </div>
  );
};

export default ImageDetails;