let animals = ["cow", "goat", "dog"];

// push method is used to add new element at the end of the array
animals.splice(2, 0, "horse", "camel");
console.log(animals);

let arr1 = ["horse", "camel"];
let arr2 = ["cow", "goat", "dog"];

// concat method is used to merge two arrays
let arr3 = arr1.concat(arr2);
console.log(arr3);

// spread operator is used to merge two arrays and also to add new elements in the array
let spread = ["apple", ...arr1, ...arr2];
console.log(spread);

// forEach method is used to iterate over the array and perform some action on each element of the array
arr1.forEach((wallah) => {
  console.log(wallah);
});

let newNum = [1, 2, 3, 4, 5];
let num = [];

// forEach method is used to iterate over the array and perform some action on each element of the array
newNum.forEach((numb) => {
  num.push(numb + 5);
});
console.log(num);

// for loop to add 5 to each element of the array
for(let i = 0; i < newNum.length; i++) {
    num.push(newNum[i] + 5);
}
console.log(num);
