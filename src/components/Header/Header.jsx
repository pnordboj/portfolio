import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='bg-gray-900'>
      <nav className='flex items-center justify-between container mx-auto py-4 w-screen'>
        <Link to='/' className='flex items-center'>
          <h1 className='text-white text-xl font-bold'>Portfolio</h1>
        </Link>
      </nav>
    </header>
  );
};
