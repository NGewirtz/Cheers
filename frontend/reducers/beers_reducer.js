import { RECEIVE_ALL_BEERS, RECEIVE_BEER } from '../actions/beer_actions';

const BeerReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_BEERS:
      return Object.assign({}, action.beers );
    case RECEIVE_BEER:
      return Object.assign({}, { [action.beer.id]: action.beer });
    default:
      return state;
  }
};

export default BeerReducer;
