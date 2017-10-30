export const fetchBrewery = id => {
  return $.ajax({
    method: 'get',
    url: `/api/breweries/${id}`
  });
};
