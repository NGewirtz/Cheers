import * as APIUtil from '../util/brewery_api_util';

export const RECEIVE_BREWERY = "RECEIVE_BREWERY";

export const receiveBrewery = ({ brewery, beers, checkins }) => {
  return {
    type: RECEIVE_BREWERY,
    brewery,
    beers,
    checkins
  };
};

export const fetchBrewery = id => dispatch => (
  APIUtil.fetchBrewery(id).then(brewery => dispatch(receiveBrewery(brewery)))
);
