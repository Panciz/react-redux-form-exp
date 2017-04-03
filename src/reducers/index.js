import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import counter from './counter';
import form from './form';


const rootReducer = combineReducers({
  counter,
  form,
  routing,
});


export default rootReducer;
