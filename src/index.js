// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import promise from 'redux-promise'

// Styles


// Components
import App from './components/App';

// Reducers
import reducers from './reducers';

// Other
import registerServiceWorker from './other/registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
