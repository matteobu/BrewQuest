import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { CoffeeShop } from '../redux/slices/coffeeShopsSlice';
import { CoffeeBeanProps } from '../utils/interfaces';

const CoffeeBeanCard: React.FC<CoffeeBeanProps> = ({
  name,
  coffee_shop_id,
  origin,
  region,
  variety,
  processing_method,
  roast_level,
  tasting_notes,
  body,
  acidity,
  sweetness,
  type_of_brew,
  price_250,
  price_1000,
  grind_size_recommendations,
  roast_date,
}) => {
  const [coffeeShop, setCoffeeShop] = useState<CoffeeShop | undefined>(
    undefined
  );
  const { coffeeShops } = useSelector((state: RootState) => state.coffeeShops);
  console.log(coffeeShops);
  useEffect(() => {
    const coffeeShop = coffeeShops.find((s) => s.id === coffee_shop_id);
    console.log({ coffeeShop });
    setCoffeeShop(coffeeShop);
  }, [coffeeShops, coffee_shop_id]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
      <img src="https://qkrmdpsgqtixomxiukdx.supabase.co/storage/v1/object/sign/CoffeePackages/CoffeePackageDefault.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDb2ZmZWVQYWNrYWdlcy9Db2ZmZWVQYWNrYWdlRGVmYXVsdC5qcGciLCJpYXQiOjE3MzIxODQ4NTUsImV4cCI6MTc2MzcyMDg1NX0.8hU7TPl2omHV0955uJ19jl8anpdZNxA0oXoF9oZKZeI&t=2024-11-21T10%3A27%3A35.609Z" />
      <h6 className="text-2xl font-bold mb-2  text-gray-600">{name}</h6>
      <p className="text-gray-500 mb-2 ">
        {tasting_notes.replaceAll(',', ' | ')}
      </p>
      <p className="text-gray-500 mb-2 ">
        {origin} ({region}) | {variety} | {roast_level}
      </p>
      <p className="text-gray-500 mb-2">
        <strong>Perfect for: </strong>
        {type_of_brew}, <strong>Find it at: </strong>
        {coffeeShop?.name}
      </p>
    </div>
  );
};

export default CoffeeBeanCard;
