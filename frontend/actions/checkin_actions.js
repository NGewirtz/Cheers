import * as APIUtil from '../util/checkin_api_util';

export const RECEIVE_ALL_CHECKINS = "RECEIVE_ALL_CHECKINS";

export const receiveCheckins = checkins => {
  return {
    type: RECEIVE_ALL_CHECKINS,
    checkins
  };
};

export const fetchCheckins = (filter) => dispatch => (
  APIUtil.fetchCheckins(filter).then(checkins => dispatch(receiveCheckins(checkins)))
);
