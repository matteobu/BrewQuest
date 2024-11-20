import React, { useEffect, useState } from 'react';

const ShopFeatured: React.FC = () => {
  const [coffeeShops, setCoffeeShops] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from backend
  useEffect(() => {
    const fetchCoffeeShops = async () => {
      try {
        const response = await fetch('http://localhost:5858/api/coffee-shops'); // Replace with your server URL
        if (!response.ok) throw new Error('Failed to fetch coffee shops');
        const data = await response.json();
        setCoffeeShops(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchCoffeeShops();
  }, []);

  return (
    <div className="p-8 text-center">
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
