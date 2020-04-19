import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

defineCustomElements(window);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
