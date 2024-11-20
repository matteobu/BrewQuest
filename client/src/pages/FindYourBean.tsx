import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FindYourBean: React.FC = () => {
  const [coffeeBeans, setCoffeeBeans] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoffeeShops = async () => {
      try {
        const response = await fetch('http://localhost:5858/api/coffee-beans'); // Replace with your server URL
        if (!response.ok) throw new Error('Failed to fetch coffee shops');
        const data = await response.json();
        console.log(data);
        setCoffeeBeans(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchCoffeeShops();
  }, []);

  return (
    <div className="relative p-8 text-center">
      {/* Back to Home button */}
      <Link
        to="/"
        className="absolute top-4 left-4 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-300"
      >
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">Find Your Bean</h1>
      <p>Start your journey to discover your perfect coffee beans here.</p>
      {/* Quiz UI will go here */}
    </div>
  );
};

export default FindYourBean;
