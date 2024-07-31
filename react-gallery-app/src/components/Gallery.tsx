// src/components/Gallery.tsx

import React, { useState } from 'react';
import { Image } from '../types';
import ImageItem from './ImageItem';
import ImageDetails from './ImageDetails';
import AddImageForm from './AddImageForm';
import { v4 as uuidv4 } from 'uuid';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([
    {
      id: uuidv4(),
      title: 'Sample Image 1',
      url: 'https://via.placeholder.com/150',
      description: 'This is a sample image'
    },
    {
      id: uuidv4(),
      title: 'Sample Image 2',
      url: 'https://via.placeholder.com/150',
      description: 'This is another sample image'
    }
  ]);

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleAddImage = (image: Image) => {
    setImages([...images, image]);
  };

  return (
    <div className="gallery">
      <h1>Image Gallery</h1>
      <div className="image-list">
        {images.map(image => (
          <ImageItem key={image.id} image={image} onClick={() => handleImageClick(image)} />
        ))}
      </div>
      {selectedImage && <ImageDetails image={selectedImage} />}
      <AddImageForm onAddImage={handleAddImage} />
    </div>
  );
};

export default Gallery;