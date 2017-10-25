export const fetchBeers = () => {
  return $.ajax({
    method: 'get',
    url: '/api/beers'
  });
};
