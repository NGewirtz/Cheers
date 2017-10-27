export const _dateAndTime = date => (
  date.slice(0,19).split("T").join(" ")
);

export const _date = date => (
  date.slice(0,10)
);

export const _decimalNum = string => {
  if (parseFloat(string) !== parseFloat(string)) {
    return 0;
  }else{
    return parseFloat(string).toFixed(2);
  }
};

export const _aOrAn = beerName => {
  return /[aeiouAEIOU]/.test(beerName[0]) ? "an" : "a";
};
