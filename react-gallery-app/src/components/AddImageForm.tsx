// src/components/AddImageForm.tsx

import React, { useState } from 'react';
import { Image } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface AddImageFormProps {
  onAddImage: (image: Image) => void;
}

const AddImageForm: React.FC<AddImageFormProps> = ({ onAddImage }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newImage: Image = {
      id: uuidv4(),
      title,
      url,
      description
    };
    onAddImage(newImage);
    setTitle('');
    setUrl('');
    setDescription('');
  };

  return (
    <form className="add-image-form" onSubmit={handleSubmit}>
      <h2>Add New Image</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Image URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Image</button>
    </form>
  );
};

export default AddImageForm;