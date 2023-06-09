import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-500'>
      <h1 className='text-4xl font-bold mb-8 text-white'>Portfolio</h1>
      <div className='grid gap-4'>
        <Link
          to='/github'
          className='relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg cursor-pointer hover:bg-opacity-30'
        >
          <h3 className='text-xl font-semibold text-white'>GitHub</h3>
          <p className='text-white'>Explore my GitHub repositories</p>
        </Link>
        <Link
          to='/projects'
          className='relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg cursor-pointer hover:bg-opacity-30'
        >
          <h3 className='text-xl font-semibold text-white'>Projects</h3>
          <p className='text-white'>Check out my projects</p>
        </Link>
        <Link
          to='/about'
          className='relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg cursor-pointer hover:bg-opacity-30'
        >
          <h3 className='text-xl font-semibold text-white'>About Me</h3>
          <p className='text-white'>Learn more about me</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
