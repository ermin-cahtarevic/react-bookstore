import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './reducers/index';

const getId = () => Math.round(Math.random() * 100).toString();

const initialState = {
  books: [
    {
      title: 'First Book',
      category: 'Documentary',
      id: getId(),
    },
    {
      title: 'Second Book',
      category: 'Horror',
      id: getId(),
    },
    {
      title: 'Third Book',
      category: 'Learning',
      id: getId(),
    },
    {
      title: 'Fourth Book',
      category: 'History',
      id: getId(),
    },
  ],
};

const store = createStore(reducer(initialState));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
