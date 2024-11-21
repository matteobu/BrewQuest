import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import CoffeeBeanCard from '../cards/coffeeBeanCard';
import { CoffeeBean } from '../redux/slices/coffeeBeansSlice';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Switch,
} from '@mui/material';
import { Link } from 'react-router-dom';

const FindYourBean: React.FC = () => {
  const { coffeeBeans } = useSelector((state: RootState) => state.coffeeBeans);
  const [coffeeBeansState, setCoffeeBeansState] = useState<CoffeeBean[]>([]);
  const [roastLevel, setRoastLevel] = useState<number | null>(null);
  const [brewType, setBrewType] = useState<{
    filter: boolean;
    espresso: boolean;
  }>({
    filter: false,
    espresso: false,
  });

  // Update local state whenever coffeeBeans from Redux changes
  useEffect(() => {
    setCoffeeBeansState(coffeeBeans);
  }, [coffeeBeans]);

  return (
    <div>
      <header className="fixed top-10 left-0 h-8 w-full bg-emerald-700 text-white shadow z-10">
        <nav className="flex h-full items-center justify-between px-6">
          <p className="text-sm font-medium">Find the best beans for you</p>
          <div className="space-x-4">
            <Link
              to="/berlin-coffee-map"
              className=" hover:text-zinc-900"
            >
              Berlin Coffee Map
            </Link>
            <Link to="/info" className=" hover:text-zinc-900">
              Info
            </Link>
          </div>
        </nav>
      </header>
      <div className="mt-[48px] p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {coffeeBeansState.map((bean) => (
          <CoffeeBeanCard
            key={bean.id}
            name={bean.name}
            coffee_shop_id={bean.coffee_shop_id}
            origin={bean.origin}
            region={bean.region}
            variety={bean.variety}
            processing_method={bean.processing_method}
            roast_level={bean.roast_level}
            tasting_notes={bean.tasting_notes}
            body={bean.body}
            acidity={bean.acidity}
            sweetness={bean.sweetness}
            type_of_brew={bean.type_of_brew}
            price_250={bean.price_250}
            price_1000={bean.price_1000}
            grind_size_recommendations={bean.grind_size_recommendations}
            roast_date={bean.roast_date}
          />
        ))}
      </div>
    </div>
  );
};

export default FindYourBean;
