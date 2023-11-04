import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { StoreProvider } from './store/store';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
// import { StoreProvider } from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <StoreProvider>
  <React.StrictMode>
  <PayPalScriptProvider deferLoading={true}>
    <App />
    </PayPalScriptProvider>
  </React.StrictMode>
    </StoreProvider>
  </HelmetProvider>
);

