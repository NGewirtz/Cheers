export const fetchBeers = () => {
  return $.ajax({
    method: 'get',
    url: '/api/beers'
  });
};

export const fetchBeer = id => {
  return $.ajax({
    method: 'get',
    url: `/api/beers/${id}`
  });
};

export const createBeer = beer => {
  return $.ajax({
    method: 'post',
    url: '/api/beers',
    data: { beer }
  });
};

export const updateBeer = beer => {
  return $.ajax({
    method: 'patch',
    url: `/api/beers/${beer.id}`,
    data: { beer }
  });
};

export const fetchBreweries = () => {
  return $.ajax({
    method: 'get',
    url: '/api/breweries'
  });
};
