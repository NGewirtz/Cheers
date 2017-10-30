import { RECEIVE_ALL_BEERS, RECEIVE_BEER } from '../actions/beer_actions';
import { RECEIVE_BREWERY } from '../actions/brewery_actions';

const BeerReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_BEERS:
      return Object.assign({} , state, action.beers.beers );
    case RECEIVE_BEER:
      return Object.assign({}, state, { [action.beer.id]: action.beer });
    case RECEIVE_BREWERY:
      return Object.assign({}, state, action.beers);
    default:
      return state;
  }
};

export default BeerReducer;
