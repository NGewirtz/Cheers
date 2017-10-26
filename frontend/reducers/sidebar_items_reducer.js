import { RECEIVE_SIDEBAR_BEERS } from '../actions/beer_actions';

const SidebarReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SIDEBAR_BEERS:
      return Object.values(action.sidebarItems);
    default:
      return state;
  }
};

export default SidebarReducer;
