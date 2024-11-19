import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { toggleTheme } from './redux/uiSlice';

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.ui.theme);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <h1>BrewQuest</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
};

export default App;
