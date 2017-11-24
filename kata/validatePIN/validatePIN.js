/*

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false

*/

module.exports = function (pin) {
  return (
    !(
      (pin.length !== 4 && pin.length !== 6)
        ||
      (!Number(pin) && Number(pin) !== 0)
        ||
      !!(pin % 1)
    )
  );
};


/*

regex solution is so simple and elegant

return /^(\d{4}|\d{6})$/.test(pin)

*/

