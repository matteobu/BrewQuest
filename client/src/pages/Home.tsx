import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 text-center max-w-lg mx-auto">
      <h1 className="text-4xl font-bold tracking-wide uppercase mb-2">
        BERLIN BREW QUEST
      </h1>
      <h2 className="text-lg font-light tracking-widest text-gray-500 mb-4">
        Coffee
      </h2>
      <p className="text-sm text-gray-700 mb-6">
        High quality coffee and house-baked pastries.
      </p>
      <nav className="flex justify-center space-x-6">
        <Link
          to="/find-your-bean"
          className="text-gray-800 font-semibold hover:text-gray-600"
        >
          Find Your Bean
        </Link>
        <Link
          to="/shop-featured"
          className="text-gray-800 font-semibold hover:text-gray-600"
        >
          Shop Featured
        </Link>
        <Link
          to="/berlin-coffee-map"
          className="text-gray-800 font-semibold hover:text-gray-600"
        >
          Berlin Coffee Map
        </Link>
        <Link
          to="/info"
          className="text-gray-800 font-semibold hover:text-gray-600"
        >
          Info
        </Link>
      </nav>
    </div>
  );
};

export default Home;
