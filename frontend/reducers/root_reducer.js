import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';
import sidebarItems from './sidebar_items_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  entities,
  sidebarItems
});

export default RootReducer;
