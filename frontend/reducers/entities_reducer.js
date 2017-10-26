import { combineReducers } from 'redux';
import beers from './beers_reducer';
import breweries from './breweries_reducer';

const EntitiesReducer = combineReducers({
  beers,
  breweries
});

export default EntitiesReducer;
