
// override the  PUSH, POP, UNSHIFT and SHIFT with help of function

// let arr = [1, 2, 3, 4, 5]


// inverse of push (it add element at the start index)
// function inversePush(arr, element){
//     arr.unshift(element);
// }

// console.log('original array', arr);
// inversePush(arr, 0);
// console.log(arr);





//inverse of pop(it will remove the first index element from array)
// function inversePop(arr){
//     return arr.shift()
// }

// inversePop(arr);
// console.log(arr);





// inverse of unshift (it will add value at end of array)
// function inverseUnshift(arr, element){
//    arr.push(element)
// }

// inverseUnshift(arr, 6);
// console.log(arr);



// inverse of shift (it will remove element from last element from array)
// function inverseShift(){
//     return arr.pop()
// }

// inverseShift(arr);
// console.log(arr);

//-------------------------------------------------------------------------------------------------------------------------------------------------

// Override push to remove the last element (like pop)


// Array.prototype.push = function () {
//     return this.pop();
// };


// Array.prototype.pop = function (element) {
//     return this[this.length] = element;
// };


// Array.prototype.unshift = function () {
//     return this.shift();
// };

// Array.prototype.shift = function (element) {
//     return this[this.length] = element;
// }



// let arr2 = [1, 2, 3, 4, 5];

// console.log('original', arr2);


// arr2.push();
// console.log('push', arr2);


// arr2.pop(6);
// console.log('pop', arr2);

// arr2.unshift()
// console.log('unshift', arr2);

// arr2.shift(8)
// console.log('shift', arr2);


//----------------------------------------------------------------------------------------------------------------------------------------------


let overridePush = Array.prototype.push;
let overridePop = Array.prototype.pop;

Array.prototype.push = function(){
    return overridePop.apply(this);
};

Array.prototype.pop = function(element){
    overridePush.call(this, element);
    return element;
}


let arryy = [1, 2, 3, 4];
console.log( 'ori' ,arryy);

arryy.push();
console.log('push', arryy);

arryy.pop(8);
console.log('pop', arryy);




