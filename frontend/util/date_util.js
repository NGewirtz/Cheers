export const dateAndTime = date => {
  return date.slice(0,19).split("T").join(" ");
};

export const date = date => {
  return date.slice(0,10);
};
