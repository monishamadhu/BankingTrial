import React from 'react';

import './App.css';
import Main from './components/MainComponent';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider} from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';

const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div style={{
        backgroundImage: `url("")`,

      }}>
        <Main/>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
