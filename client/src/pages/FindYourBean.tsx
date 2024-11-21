import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import CoffeeBeanCard from '../cards/coffeeBeanCard';
import { CoffeeBean } from '../redux/slices/coffeeBeansSlice';
import {
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';

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

  // Filter function
  const applyFilters = () => {
    let filteredBeans = coffeeBeans;

    // Filter by roast level
    if (roastLevel !== null) {
      filteredBeans = filteredBeans.filter((bean) => {
        const roastMap: Record<number, string> = {
          0: 'Light',
          25: 'Light-Medium',
          50: 'Medium',
          75: 'Medium-Dark',
          100: 'Dark',
        };
        return bean.roast_level === roastMap[roastLevel];
      });
    }

    // Filter by brew type
    if (brewType.filter) {
      filteredBeans = filteredBeans.filter(
        (bean) => bean.type_of_brew === 'Filter Coffee'
      );
    }
    if (brewType.espresso) {
      filteredBeans = filteredBeans.filter(
        (bean) => bean.type_of_brew === 'Espresso'
      );
    }

    setCoffeeBeansState(filteredBeans);
  };

  // Reset filters
  const resetFilters = () => {
    setRoastLevel(null);
    setBrewType({ filter: false, espresso: false });
    setCoffeeBeansState(coffeeBeans);
  };

  return (
    <div className="h-screen flex">
      {/* Fixed Filter Menu */}
      <aside className="w-1/5 bg-gray-100 p-6 border-r border-gray-300">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Roast Level Slider */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Roast Level</h3>
          <Slider
            value={roastLevel || 0} // Default to 0 when null
            onChange={(_, value) => setRoastLevel(value as number)}
            step={25}
            marks={[
              { value: 0, label: 'Light' },
              { value: 25, label: 'Light-Medium' },
              { value: 50, label: 'Medium' },
              { value: 75, label: 'Medium-Dark' },
              { value: 100, label: 'Dark' },
            ]}
            min={0}
            max={100}
          />
        </div>

        {/* Brew Type Checkboxes */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Brew Type</h3>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={brewType.filter}
                  onChange={(e) =>
                    setBrewType((prev) => ({
                      ...prev,
                      filter: e.target.checked,
                    }))
                  }
                />
              }
              label="Filter Coffee"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={brewType.espresso}
                  onChange={(e) =>
                    setBrewType((prev) => ({
                      ...prev,
                      espresso: e.target.checked,
                    }))
                  }
                />
              }
              label="Espresso"
            />
          </FormGroup>
        </div>

        {/* Apply and Reset Buttons */}
        <div className="space-y-2">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={applyFilters}
          >
            Apply Filters
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={resetFilters}
          >
            Clear Filters
          </Button>
        </div>
      </aside>

      {/* Coffee Bean Cards */}
      <main className="w-4/5 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Find Your Bean</h1>
        <p className="text-center mb-6">
          Start your journey to discover your perfect coffee beans here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </main>
    </div>
  );
};

export default FindYourBean;
