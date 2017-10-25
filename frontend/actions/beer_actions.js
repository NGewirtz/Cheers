import * as APIUtil from '../util/beer_api_util';

export const RECEIVE_ALL_BEERS = "RECEIVE_ALL_BEERS";

export const receiveBeers = beers => {
  return {
    type: RECEIVE_ALL_BEERS,
    beers
  };
};


export const fetchBeers = () => dispatch => (
  APIUtil.fetchBeers().then(beers => dispatch(receiveBeers(beers)))
);
