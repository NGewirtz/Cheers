export const entitiesSelector = (entity, ids) => {
  return ids.map(id => entity[id]);
};
