import { combineReducers } from 'redux';
import beers from './beers_reducer';
import breweries from './breweries_reducer';
import checkins from './checkins_reducer';

const EntitiesReducer = combineReducers({
  beers,
  breweries,
  checkins
});

export default EntitiesReducer;
