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
    <div>
      <header className="fixed top-10 left-0 h-8 w-full bg-emerald-700 text-white shadow z-10">
        <nav className="flex h-full items-center justify-between px-6">
          <p className="text-sm font-medium">Shop Featured</p>
          <div className="space-x-4">
            <Link to="/berlin-coffee-map" className=" hover:text-zinc-900">
              Berlin Coffee Map
            </Link>
            <Link to="/info" className=" hover:text-zinc-900">
              Info
            </Link>
          </div>
        </nav>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
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
