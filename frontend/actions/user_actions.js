import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = ({ user, checkins }) => {
  return {
    type: RECEIVE_USER,
    user,
    checkins
  };
};

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
);
