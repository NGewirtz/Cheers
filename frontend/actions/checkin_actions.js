import * as APIUtil from '../util/checkin_api_util';
import { receiveSessionErrors } from './session_actions';

export const RECEIVE_ALL_CHECKINS = "RECEIVE_ALL_CHECKINS";
export const RECEIVE_CHECKIN = "RECEIVE_CHECKIN";

export const receiveCheckins = checkins => {
  return {
    type: RECEIVE_ALL_CHECKINS,
    checkins
  };
};

export const receiveCheckin = checkin => {
  return {
    type: RECEIVE_CHECKIN,
    checkin
  };
};

export const fetchCheckins = (filter) => dispatch => (
  APIUtil.fetchCheckins(filter).then(checkins => dispatch(receiveCheckins(checkins)))
);

export const createCheckin = checkin => dispatch => (
  APIUtil.createCheckin(checkin).then(checkin => dispatch(receiveCheckin(checkin)),
  errors => dispatch(receiveSessionErrors(errors)))
);
