import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Routes from './routes/routes';

import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <Routes />
    </Provider>
  );
}

export default App;
