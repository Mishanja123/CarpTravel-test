// components/Header.tsx
import React from 'react';

export default function Header() {
  return (
    <header className='fixed z-[50]'>
    <div className="flex items-center px-5 py-9 w-full">
        <div>
            <img src="/images/Rectangle.png" alt="Logo" />
            <h1>CarpTravel</h1>
        </div>
        <button>menu</button>
    </div>
    </header>
  );
}
