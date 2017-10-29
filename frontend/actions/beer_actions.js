import * as APIUtil from '../util/beer_api_util';
import { receiveSessionErrors } from './session_actions';

export const RECEIVE_ALL_BEERS = "RECEIVE_ALL_BEERS";
export const RECEIVE_BEER = "RECEIVE_BEER";
export const RECEIVE_ALL_BREWERIES = "RECEIVE_ALL_BREWERIES";
export const RECEIVE_SIDEBAR_BEERS = "RECEIVE_SIDEBAR_BEERS";

export const receiveBeers = beers => {
  return {
    type: RECEIVE_ALL_BEERS,
    beers
  };
};

export const receiveBeer = ({ beer, checkins }) => {
  return {
    type: RECEIVE_BEER,
    beer,
    checkins
  };
};

export const receiveBreweries = breweries => {
  return {
    type: RECEIVE_ALL_BREWERIES,
    breweries
  };
};

export const receiveSidebarBeers = sidebarItems => {
  return {
    type: RECEIVE_SIDEBAR_BEERS,
    sidebarItems
  };
};


export const fetchBeers = (filter) => dispatch => (
  APIUtil.fetchBeers(filter).then(beers => dispatch(receiveBeers(beers)))
);

export const fetchSidebarBeers = () => dispatch => (
  APIUtil.fetchSidebarBeers().then(beers => dispatch(receiveSidebarBeers(beers)))
);

export const fetchBeer = id => dispatch => (
  APIUtil.fetchBeer(id).then(beer => dispatch(receiveBeer(beer)))
);

export const createBeer = beer => dispatch => (
  APIUtil.createBeer(beer).then(newBeer => dispatch(receiveBeer(newBeer)),
  errors => dispatch(receiveSessionErrors(errors)))
);

export const updateBeer = beer => dispatch => (
  APIUtil.updateBeer(beer).then(newBeer => dispatch(receiveBeer(newBeer)),
  errors => dispatch(receiveSessionErrors(errors)))
);

export const addBeerToWishlist = id => dispatch => (
  APIUtil.addBeerToWishlist(id).then(beer => dispatch(receiveBeer(beer)),
  errors => dispatch(receiveSessionErrors(errors)))
);

export const fetchBreweries = () => dispatch => (
  APIUtil.fetchBreweries().then(breweries => dispatch(receiveBreweries(breweries)))
);
