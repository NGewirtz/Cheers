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

export const addBeerToWishlist = beerId => {
  return $.ajax({
    method: 'post',
    url: `/api/beers/${beerId}/wishlist_items`
  });
}
