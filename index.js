const listOfProducts = [
  { productName: "TV", quantity: 10, description: "television" },
  { productName: "AC", quantity: 5, description: "air conditioner" },
  { productName: "TV", quantity: 10, description: "television" },
  { productName: "AC", quantity: 5, description: "air conditioner" },
  { productName: "FAN", quantity: 10, description: "Ceiling Fan" },
];



// first question

function getUniqueProductCount(arr) {
  let obj = {};
  let i = 0;
  while (i < arr.length) {
    let str = arr[i].productName;
    if (obj[str] === undefined) {
      obj[str] = 1;
    } else {
      let p = obj[str];
      obj[str] = p + 1;
    }
    i++;
  }
  return obj;
}
let result = getUniqueProductCount(listOfProducts);
console.log(result);


//second question

function getUniquePrducts(arr) {
  let obj = {};
  let i = 0;
  while (i < arr.length) {
    let str = arr[i].productName;
    if (obj[str] === undefined) {
      obj[str] = arr[i];
    } else {
      obj[str].quantity = obj[str].quantity + arr[i].quantity;
    }
    i++;
  }
  let totalArr = [];
  for (let k in obj) {
    totalArr.push(obj[k]);
  }
  return totalArr;
}
let  result2 = getUniquePrducts(listOfProducts);
console.log(result2);


 