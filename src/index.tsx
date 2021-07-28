import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyles';
import { AppProvider } from './services/context'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
