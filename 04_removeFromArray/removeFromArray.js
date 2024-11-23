const removeFromArray = function(arr, ...args) {
 
  const filteredArray = arr.filter(item => !args.includes(item));

  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
