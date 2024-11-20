import React from 'react';
import { Link } from 'react-router-dom';

const BerlinCoffeeMap: React.FC = () => {
  return (
    <div className="relative p-8 text-center">
      {/* Back to Home button */}
      <Link
        to="/"
        className="absolute top-4 left-4 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-300"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4">Berlin Coffee Map</h1>
      <p>Discover the best coffee bars in Berlin with our interactive map.</p>
      {/* Map component will be added here */}
    </div>
  );
};

export default BerlinCoffeeMap;