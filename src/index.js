import React from 'react';
import ReactDOM from 'react-dom/client';
import { PeliculaApp } from './PeliculaApp';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PeliculaApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);