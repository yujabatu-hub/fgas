import React from 'react';
import { ImageFrameProps } from '../types';

const ImageFrame: React.FC<ImageFrameProps> = ({ src, alt, className = "" }) => {
  return (
    <div className={`flex justify-center my-4 ${className}`}>
      <img 
        src={src} 
        alt={alt || "Milady image"}
        className="block max-w-full md:max-w-[40em] border border-[#777] hover:border-purple-600 transition-colors"
      />
    </div>
  );
};

export default ImageFrame;