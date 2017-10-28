import { RECEIVE_SIDEBAR_BEERS } from '../actions/beer_actions';

const SidebarReducer = (state = { beers: {}, orderedIds: []}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SIDEBAR_BEERS:
      return Object.assign({}, state, { beers: action.sidebarItems.beers, orderedIds: action.sidebarItems.orderedIds } );
    default:
      return state;
  }
};

export default SidebarReducer;
