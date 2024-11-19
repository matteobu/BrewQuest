import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error(
    "Root element not found. Ensure your HTML has a <div id='root'></div>."
  );
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
