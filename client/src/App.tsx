import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FindYourBean from './pages/FindYourBean';
import ShopFeatured from './pages/ShopFeatured';
import BerlinCoffeeMap from './pages/BerlinCoffeeMap';
import Info from './pages/Info';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { fetchCoffeeShops } from './redux/slices/coffeeShopsSlice';
import { fetchCoffeeBeans } from './redux/slices/coffeeBeansSlice';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCoffeeShops());
    dispatch(fetchCoffeeBeans());
  }, [dispatch]);

  return (
    <Router>
      <div
        className="h-screen bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('/coffeePourOver.png')`,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-your-bean" element={<FindYourBean />} />
          <Route path="/shop-featured" element={<ShopFeatured />} />
          <Route path="/berlin-coffee-map" element={<BerlinCoffeeMap />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
