import React from 'react';
import { Link } from 'react-router-dom';

const BerlinCoffeeMap: React.FC = () => {
  return (
    <div>
      <header className="fixed top-10 left-0 h-8 w-full bg-emerald-700 text-white shadow z-10">
        <nav className="flex h-full items-center justify-between px-6">
          {/* Left Content */}
          <p className="text-sm font-medium">
            The map of all the Coffee Shops available
          </p>
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
      {/* Map component will be added here */}
    </div>
  );
};

export default BerlinCoffeeMap;
