1;
let data1 = [1, 3, 67, 4, 7, 8, 23, 99, 67, 54, 3, 0, 8, 7, 43];

function modify(element) {
  let r = element * 100;
  return r;
}

let new1Array = data.map(modify);

console.log(new1Array);
//------------------------------------
//2

let data = ["karina", "Kaktus", "Harry Potter"];
function changeToValue(e) {
  data.lenght;
}

//------------------------
//3

let numbers = [
  3, 7, 5, 4, 67, 8, 844, 74, 34, 6, 7888, 5, 6765, 4, 56, 67, 4, 6,
];
let newArray = numbers.filter(function (e) {
  if (e < 100) {
    return false;
  } else {
    return true;
  }
});

console.log(newArray);
