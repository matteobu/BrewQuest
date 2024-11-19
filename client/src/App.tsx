import React from 'react';

const App: React.FC = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url('/coffeePourOver.png')`,
      }}
    >
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 text-center max-w-lg">
        <h1 className="text-4xl font-bold tracking-wide uppercase mb-2">
          BREW QUEST
        </h1>
        <h2 className="text-lg font-light tracking-widest text-gray-500 mb-4">
          Coffee
        </h2>
        <p className="text-sm text-gray-700 mb-6">
          High quality coffee and house-baked pastries.
        </p>
        <nav className="flex justify-center space-x-6">
          <a
            href="#order"
            className="text-gray-800 font-semibold hover:text-gray-600"
          >
            Order Ahead
          </a>
          <a
            href="#ship"
            className="text-gray-800 font-semibold hover:text-gray-600"
          >
            Ship
          </a>
          <a
            href="#contact"
            className="text-gray-800 font-semibold hover:text-gray-600"
          >
            Contact
          </a>
          <a
            href="#visit"
            className="text-gray-800 font-semibold hover:text-gray-600"
          >
            Visit
          </a>
          <a
            href="#info"
            className="text-gray-800 font-semibold hover:text-gray-600"
          >
            Info
          </a>
        </nav>
      </div>
    </div>
  );
};

export default App;
