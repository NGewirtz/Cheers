export const beersSelector = (beers, orderedIds) => {
  return orderedIds.map(id => beers[id]);
};
