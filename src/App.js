import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Routes from './routes/routes';

function App() {
  return (
    <div className="container">
      <Provider store={configureStore()}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
