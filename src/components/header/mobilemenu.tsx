import React from 'react';

interface MobilemenuProps {
  isOpen: boolean;
}

const Mobilemenu = ({ isOpen }: MobilemenuProps) => {
  return (
    <aside
      className={`inline-flex lg:hidden absolute top-0 left-0 w-[250px] bg-gray-900 h-screen transform ease-out-in duration-700 z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-[250px]'
      }`}
    >
      <nav>
        <ul>
          <li>homes</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Mobilemenu;
