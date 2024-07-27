import React, { useState } from 'react';

const ImageUpload = ({ isMulti = false, onImageUpload }) => {
  const [previews, setPreviews] = useState([]);
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const newPreviews = newFiles.map(file => URL.createObjectURL(file));

    const updatedFiles = isMulti ? [...files, ...newFiles] : newFiles;
    setFiles(updatedFiles);
    setPreviews(isMulti ? [...previews, ...newPreviews] : newPreviews);

    // Notify parent component
    if (onImageUpload) {
      onImageUpload(updatedFiles);
    }
  };

  const handleRemoveImage = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);

    setFiles(newFiles);
    setPreviews(newPreviews);

    // Update parent component
    if (onImageUpload) {
      onImageUpload(newFiles);
    }
  };

  return (
    <div className="image-upload space-y-4">
      <label className="block text-sm font-medium text-gray-700">Upload Image(s)</label>
      <input
        type="file"
        accept="image/*"
        multiple={isMulti}
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:border-indigo-500"
      />
      <div className="previews grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {previews.map((preview, index) => (
          <div key={index} className="relative group">
            <img src={preview} alt={`preview-${index}`} className="w-full h-full object-cover rounded-lg" />
            <button
              onClick={() => handleRemoveImage(index)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-75 group-hover:opacity-100 transition-opacity"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
