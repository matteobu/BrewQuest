import React from 'react';
import { Link } from 'react-router-dom';

const Info: React.FC = () => {
  return (
    <div className="relative p-8 text-center">
      {/* Back to Home button */}
      <Link
        to="/"
        className="absolute top-4 left-4 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-300"
      >
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">Info</h1>
      <p>Learn more about Berlin Brew Quest and what we offer.</p>
      {/* Additional general info goes here */}
    </div>
  );
};

export default Info;
