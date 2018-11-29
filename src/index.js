import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configigureStore from './store';

/**
 * Making sure we use the most upto date typography
 * Please refer to https://material-ui.com/style/typography/#migration-to-typography-v2 for more info
 */


window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

ReactDOM.render(
    <Provider store={configigureStore()}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
