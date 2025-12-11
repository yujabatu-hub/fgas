import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ title, variant = 'light', id, children }) => {
  let containerClass = "mb-4 border mx-4";
  let headerClass = "px-1 py-0.5 text-[1.1em] font-bold";

  switch (variant) {
    case 'default':
      containerClass += " border-[#2f4d0c] bg-white";
      headerClass += " bg-[#2f4d0c] text-white";
      break;
    case 'light':
      containerClass += " border-[#2f4d0c] text-[#2f4d0c] bg-white";
      headerClass += " bg-[#b9d9b7] text-[#2f4d0c]";
      break;
    case 'red':
      containerClass += " border-[#800000] bg-[#ffffee]";
      headerClass += " bg-[#800000] text-white";
      break;
  }

  return (
    <div id={id} className={containerClass}>
      <div className={headerClass}>
        <h2 className="ml-1 my-[0.001em]">{title}</h2>
      </div>
      <div className="p-2">
        {children}
      </div>
    </div>
  );
};

export default Section;