import { combineReducers } from 'redux';
import beers from './beers_reducer';

const EntitiesReducer = combineReducers({
  beers
});

export default EntitiesReducer;
