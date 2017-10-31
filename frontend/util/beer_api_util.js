export const fetchBeers = (filter) => {
  return $.ajax({
    method: 'get',
    url: `/api/beers`,
    data: filter
  });
};

export const fetchSidebarBeers = () => {
  return $.ajax({
    method: 'get',
    url: `/api/beers/sidebar`,
  });
};

export const searchBeers = query => {
  return $.ajax({
    method: 'get',
    url: `/api/beers/search`,
    data: query
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
    processData: false,
    contentType: false,
    dataType: 'json',
    data: beer,
  });
};

export const updateBeer = beer => {
  return $.ajax({
    method: 'patch',
    url: `/api/beers/${beer.get("beer[id]")}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: beer
  });
};

export const fetchBreweries = () => {
  return $.ajax({
    method: 'get',
    url: '/api/breweries'
  });
};

export const addBeerToWishlist = beerId => {
  return $.ajax({
    method: 'post',
    url: `/api/beers/${beerId}/wishlist_items`
  });
};

export const removeBeerFromWishlist = beerId => {
  return $.ajax({
    method: 'delete',
    url: `/api/wishlist_items/${beerId}`
  });
};
