import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/layout/SharedLayout';

// Pages
import Home from './pages/home/Home';

const App = () => {
  return (
    <div>
      <SharedLayout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </SharedLayout>
    </div>
  );
};

export default App;
