import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
// import {DataLayer} from './DataLayer';
// import reducer, {initialState} from './reducer';
// reducer - default export , initialState - normal export

ReactDOM.render(
  <React.StrictMode>
    {/* <DataLayer initialState={initialState} reducer={reducer}> */}
    <Provider store={store}>
    <App/>
    </Provider>
    {/* </DataLayer> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
