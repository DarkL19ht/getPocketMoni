// components/FocusImage.tsx

import React, { useState } from 'react';

interface FocusImageProps {
  imageUrl: string;
}

const FocusImage: React.FC<FocusImageProps> = ({ imageUrl }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleButtonClick = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div className={`relative w-64 h-64 mx-auto ${isFocused ? 'shadow-lg' : ''}`}>
      <img src={imageUrl} alt="Focus Image" className="w-full h-full" />
      <button
        onClick={handleButtonClick}
        className="absolute bottom-4 left-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Focus
      </button>
    </div>
  );
};

export default FocusImage;
