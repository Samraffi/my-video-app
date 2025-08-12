import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { additionalMenuItems, mainMenuItems, MenuItem } from './constants';


const Sidebar: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={`h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out z-50
        ${isHovered ? 'w-64' : 'w-20'}
      `}
    >
      {isHovered && (
        <div className="fixed inset-0 bg-black opacity-80 z-40"></div>
      )}

      <div
        className="relative z-50 flex flex-col h-full py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`flex items-center ${isHovered ? 'px-6' : 'invisible justify-center'} py-4 mb-6`}>
          <div className="bg-gray-500 h-10 w-10 rounded-full object-cover"></div>
          <span className="ml-4 text-xl font-semibold">Daniel</span>
        </div>

        <nav
          className="flex flex-col items-center space-y-2"
        >
          {mainMenuItems.map((item: MenuItem) => (
            <div
              key={item.name}
              className={`flex items-center w-full cursor-pointer rounded-md hover:bg-gray-700
                ${isHovered ? 'px-6 py-3' : 'justify-center py-3'}
              `}
            >
              <img
                src={item.imageUrl}
                className={`h-6 w-6 object-contain`}
                alt={`${item.name} icon`}
              />
              {isHovered && <span className="ml-4 text-lg capitalize">{item.name}</span>}
            </div>
          ))}
        </nav>

        {isHovered && (
          <div className="mt-auto pb-4 pt-8">
            {additionalMenuItems.map((item) => (
              <div
                key={uuidv4()}
                className="flex items-center w-full px-6 py-3 cursor-pointer hover:bg-gray-700 rounded-md"
              >
                <span className="ml-4 text-lg">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;