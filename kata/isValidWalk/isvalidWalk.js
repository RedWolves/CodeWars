/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

module.exports = function(walk) {
  // test the length and test the parameter, if it's not an array, fail it.
  if (walk.length !== 10 ||  walk.constructor !== Array) {
    return false;
  }

  //We have an Array that is 10 minutes long let's see if we get to the same spot.
  // x,y (or e/w, n/s)
  let eastWest = 0;
  let northSouth = 0;
  walk.forEach((e) => {
    switch(e) {
      case "e": 
        eastWest++;
        break;
      case "w":
        eastWest--;
        break;
      case "n":
        northSouth++;
        break;
      case "s":
        northSouth--;
        break;
      default:
        //if the character in the array is not valid just add a ton to make it fail
        northSouth += 100;
    };
  });

  //we should be where we started if both variables are 0.
  if (eastWest !== 0 || northSouth !== 0) {
    return false;
  }
  
  return true;
};
