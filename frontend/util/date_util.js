export const dateAndTime = date => (
  date.slice(0,19).split("T").join(" ")
);

export const date = date => (
  date.slice(0,10)
);

export const formatNum = string => (
  parseFloat(string).toFixed(2)
);
