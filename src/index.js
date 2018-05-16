import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  promisMiddleware from 'redux-promise';

import Search from './components/search';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promisMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Search options={    
        { 
          apiUrl :'http://gd.geobytes.com/AutoCompleteCity?callback?&filter=?&q=', ////example search  api 
          length: 5        /////how many suggestions
        }
           } />
  </Provider>
  , document.querySelector('.container'));
