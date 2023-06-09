import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className={`bg-gray-900 py-4 flex justify-center items-center`}>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center space-x-4'>
          <a
            href='https://github.com/pnordboj'
            target='_blank'
            rel='noopener noreferrer'
            className={'text-white hover:text-gray-700'}
          >
            <FaGithub className='h-6 w-6' />
          </a>
          <a
            href='https://www.linkedin.com/in/p-n-j'
            target='_blank'
            rel='noopener noreferrer'
            className={'text-white hover:text-gray-700'}
          >
            <FaLinkedin className='h-6 w-6' />
          </a>
        </div>
      </div>
    </footer>
  );
};
