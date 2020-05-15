import React from 'react';
import ReactDOM from 'react-dom';


// External css
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css'
// External css


import App from './App';

import './index.css';

import { Provider } from 'react-redux'
import store from './store/store'

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

// wrap the app in I18next Provider with the configuration loaded from i18n.js

ReactDOM.render(
  <Provider store={store}>

    <I18nextProvider i18n={i18n}>
		<App />
	</I18nextProvider>
  </Provider>,
  document.getElementById('root')
);
