import { RECEIVE_ALL_BEERS } from '../actions/beer_actions';

const BeerReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_BEERS:
      return Object.assign({}, action.beers );
    default:
      return state;
  }
};

export default BeerReducer;
