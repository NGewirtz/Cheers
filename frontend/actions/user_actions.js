import * as APIUtil from '../util/user_api_util';
import { receiveSessionErrors } from './session_actions';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_UPDATED_USER = "RECEIVE_UPDATED_USER";

export const receiveUser = ({ user, checkins }) => {
  return {
    type: RECEIVE_USER,
    user,
    checkins
  };
};

export const receiveUpdatedUser = ({ user, checkins }) => {
  return {
    type: RECEIVE_UPDATED_USER,
    user,
    checkins
  };
};

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user).then(user => dispatch(receiveUpdatedUser(user)),
  errors => dispatch(receiveSessionErrors(errors)))
);
