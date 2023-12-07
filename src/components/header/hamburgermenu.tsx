import React, { useState } from 'react';
import { BiX, BiMenu } from "react-icons/bi";

interface HamburgerMenuProps {
  toggleMenu: () => void; // Accept toggleMenu prop
}

const HamburgerMenu = ({ toggleMenu }: HamburgerMenuProps) => {

  const [isIconX, setIsIconX] = React.useState(true);

  const handleClick = () => {
    setIsIconX(!isIconX);
  };

  return (
    <div className='flex justify-end items-center pr-3'>
      <div onClick={toggleMenu} className='inline-flex lg:hidden'>
        <button onClick={handleClick}>
          {isIconX ? (
            <BiMenu size={24} />
          ) : (
            <BiX size={24} onClick={toggleMenu} />
          )}
        </button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
