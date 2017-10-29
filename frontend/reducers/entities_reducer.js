import { combineReducers } from 'redux';
import beers from './beers_reducer';
import breweries from './breweries_reducer';
import checkins from './checkins_reducer';
import comments from './comments_reducer';
import users from './user_reducer';

const EntitiesReducer = combineReducers({
  beers,
  breweries,
  checkins,
  comments,
  users
});

export default EntitiesReducer;
