function validatePIN(pin) {
  //Start coding here
  //console.log(`num is ${pin.length} type ; ${typeof num}`);
  countPin = pin.length;

  if (4 <= countPin || countPin <= 6) {
    num = Number(pin);
    if (isNaN(pin)) {
      return false;
    } else return true;
  } else return false;
}

let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false

/////ยังทำไม่ได้