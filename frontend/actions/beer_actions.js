import * as APIUtil from '../util/beer_api_util';

export const RECEIVE_ALL_BEERS = "RECEIVE_ALL_BEERS";
export const RECEIVE_BEER = "RECEIVE_BEER";
export const RECEIVE_ALL_BREWERIES = "RECEIVE_ALL_BREWERIES";

export const receiveBeers = beers => {
  return {
    type: RECEIVE_ALL_BEERS,
    beers
  };
};

export const receiveBeer = beer => {
  return {
    type: RECEIVE_BEER,
    beer
  };
};

export const receiveBreweries = breweries => {
  return {
    type: RECEIVE_ALL_BREWERIES,
    breweries
  };
};


export const fetchBeers = () => dispatch => (
  APIUtil.fetchBeers().then(beers => dispatch(receiveBeers(beers)))
);

export const fetchBeer = id => dispatch => (
  APIUtil.fetchBeer(id).then(beer => dispatch(receiveBeer(beer)))
);

export const createBeer = beer => dispatch => (
  APIUtil.createBeer(beer).then(newBeer => dispatch(receiveBeer(newBeer)),
  error => console.log(error))
);

export const updateBeer = beer => dispatch => (
  APIUtil.updateBeer(beer).then(newBeer => dispatch(receiveBeer(newBeer)))
);

export const fetchBreweries = () => dispatch => (
  APIUtil.fetchBreweries().then(breweries => dispatch(receiveBreweries(breweries)))
);
