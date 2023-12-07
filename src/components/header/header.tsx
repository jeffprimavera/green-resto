'use client';

import React, { useState } from 'react';
import TopHeader from './topHeader';
import NavigationMenu from './navigation';
import Mobilemenu from './mobilemenu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className='header-layout5 fixed top-0 left-0 w-full z-50'>
        <TopHeader />
        <NavigationMenu toggleMenu={toggleMenu} />
      </header>
      <Mobilemenu isOpen={isOpen} />
    </>
  );
}
