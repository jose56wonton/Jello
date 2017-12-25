// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import promise from 'redux-promise'

// Styles


// Components
import BoardIndex from './components/boardIndex';
import BoardShow from './components/boardShow';

// Reducers
import reducers from './reducers';

// Other
import registerServiceWorker from './other/registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
  <BrowserRouter>
    <Switch>
      <Route path="/board/:name" component={BoardShow}/>
      <Route path="/" component={BoardIndex} />
    </Switch>
  </BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();