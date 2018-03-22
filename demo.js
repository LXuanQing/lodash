/*
concat会影响原数组引用元素的值
var arr = [{a: 1}, {b: 2}];
var arr2 = [].concat(arr);
console.log(arr2, 'ar2'); // [{a: 1}, {b: 2}]
arr2[0].a = 'a';
console.log(arr2) // [{a: 'a'}, {b: 2}]
console.log(arr) // [{a: 'a'}, {b: 2}]

var arr = [1, 2, 3];
var arr2 = [].concat(arr)
arr2.push(4)
console.log(arr2)
console.log(arr)
*/

var arr = [{a: 1}, {b: 2}];
var arr2 = _.concat(arr, [3])
console.log(arr2)
arr2[0].a = 3
console.log(arr2)
console.log(arr)






