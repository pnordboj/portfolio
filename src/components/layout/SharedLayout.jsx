import React from 'react';
import { Header } from '../Header/Header';
import PropTypes from 'prop-types';

const SharedLayout = ({ children }) => {
  return (
    <div className='bg-gradient-to-r from-purple-400 to-blue-500'>
      <Header />
      <div className='container mx-auto'>{children}</div>
    </div>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SharedLayout;
