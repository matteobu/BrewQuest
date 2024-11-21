import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FindYourBean from './pages/FindYourBean';
import ShopFeatured from './pages/ShopFeatured';
import BerlinCoffeeMap from './pages/BerlinCoffeeMap';
import Info from './pages/Info';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { fetchCoffeeShops } from './redux/slices/coffeeShopsSlice';
import { fetchCoffeeBeans } from './redux/slices/coffeeBeansSlice';
import { ThemeProvider } from '@mui/material';
import { theme } from './utils/materialTheme';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCoffeeShops());
    dispatch(fetchCoffeeBeans());
  }, [dispatch]);

  return (
    <Router>
      <div
        className="h-screen bg-fixed bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `url('/coffeePourOver.png')`,
        }}
      >
        {/* Main Header */}
        <header className="fixed top-0 left-0 w-full bg-emerald-900 shadow-md z-20 h-10 flex items-center px-6">
          <nav className="flex w-full items-center justify-between">
            <div>
              <Link to="/" className="text-2xl font-bold text-zinc-400">
                Brew Quest App
              </Link>
            </div>
            <div className="space-x-4">
              <Link to="/" className="text-zinc-400 hover:text-zinc-900">
                Home
              </Link>
              <Link
                to="/find-your-bean"
                className="text-zinc-400 hover:text-zinc-900"
              >
                Find Your Bean
              </Link>
              <Link
                to="/shop-featured"
                className="text-zinc-400 hover:text-zinc-900"
              >
                Shop Featured
              </Link>
              <Link
                to="/berlin-coffee-map"
                className="text-zinc-400 hover:text-zinc-900"
              >
                Berlin Coffee Map
              </Link>
              <Link to="/info" className="text-zinc-400 hover:text-zinc-900">
                Info
              </Link>
            </div>
          </nav>
        </header>

        {/* Content Below Main Header */}
        <div className="mt-[30px] h-full overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/find-your-bean"
              element={
                <ThemeProvider theme={theme}>
                  <FindYourBean />
                </ThemeProvider>
              }
            />
            <Route path="/shop-featured" element={<ShopFeatured />} />
            <Route path="/berlin-coffee-map" element={<BerlinCoffeeMap />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
