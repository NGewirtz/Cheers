import * as APIUtil from '../util/checkin_api_util';
import { receiveSessionErrors } from './session_actions';

export const RECEIVE_ALL_CHECKINS = "RECEIVE_ALL_CHECKINS";
export const RECEIVE_CHECKIN = "RECEIVE_CHECKIN";
export const RECEIVE_NEW_CHECKIN = "RECEIVE_NEW_CHECKIN";

export const receiveCheckins = checkins => {
  return {
    type: RECEIVE_ALL_CHECKINS,
    checkins
  };
};

export const receiveCheckin = ({ checkin, comments, users }) => {
  return {
    type: RECEIVE_CHECKIN,
    checkin,
    comments,
    users
  };
};

export const receiveNewCheckin = ({ checkin, comments, users }) => {
  return {
    type: RECEIVE_NEW_CHECKIN,
    checkin,
    comments,
    users
  };
};

export const fetchCheckins = (filter) => dispatch => (
  APIUtil.fetchCheckins(filter).then(checkins => dispatch(receiveCheckins(checkins)))
);

export const fetchCheckin = id => dispatch => (
  APIUtil.fetchCheckin(id).then(checkin => dispatch(receiveCheckin(checkin)))
);

export const createCheckin = checkin => dispatch => (
  APIUtil.createCheckin(checkin).then(checkin => dispatch(receiveNewCheckin(checkin)),
  errors => dispatch(receiveSessionErrors(errors)))
);

export const updateCheckin = checkin => dispatch => (
  APIUtil.updateCheckin(checkin).then(checkin => dispatch(receiveCheckin(checkin)),
  errors => dispatch(receiveSessionErrors(errors)))
);

export const cheersCheckin = id => dispatch => (
  APIUtil.cheersCheckin(id).then(checkin => dispatch(receiveCheckin(checkin)),
  errors => dispatch(receiveSessionErrors(errors)))
);

export const deleteCheersCheckin = id => dispatch => (
  APIUtil.deleteCheersCheckin(id).then(checkin => dispatch(receiveCheckin(checkin)),
  errors => dispatch(receiveSessionErrors(errors)))
);
