import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Link } from 'react-router-dom';

const ShopFeatured: React.FC = () => {
  const { coffeeShops, loading, error } = useSelector(
    (state: RootState) => state.coffeeShops
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="relative p-8 text-center">
      <Link
        to="/"
        className="absolute top-4 left-4 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-300"
      >
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">Shop Featured</h1>
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {coffeeShops.map((shop) => (
          <div key={shop.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={shop.image_url}
              alt={shop.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold">{shop.name}</h3>
            <p className="text-gray-600">{shop.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopFeatured;
