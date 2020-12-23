import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import "fontsource-roboto/300.css"
// import "fontsource-roboto/400.css"
// import "fontsource-roboto/500.css"
// import "fontsource-roboto/700.css"

import "fontsource-league-spartan/latin-300.css"
import "fontsource-league-spartan/latin-400.css"
import "fontsource-league-spartan/latin-500.css"
import "fontsource-league-spartan/latin-700.css"

import { BigNumber } from 'bignumber.js'

BigNumber.config({
  DECIMAL_PLACES: 80,
  EXPONENTIAL_AT: 1000
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
