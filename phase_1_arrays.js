Array.prototype.unique = function () {
    let uniq = [];

    for (let i = 0; i < this.length; i++) {
        if (!uniq.includes(this[i])) {
            uniq.push(this[i]);
        };
    };
    return uniq
};

// console.log([1, 1, 2, 2, 3].unique());


// let obj = {};

// obj.num = 3;

Array.prototype.twoSum = function () {
    let summed = [];
    // debugger;
    for (let i = 0; i < (this.length - 1); i++) {
        for (let j = (i + 1); j < (this.length); j++) {
            if (this[i] + this[j] === 0) {
                summed.push([i, j]);
            };
        };
    };

    return summed;
};

// let arr = [1, 2, 3, -3, -2]
// console.log(arr.twoSum());

// how to do twosum with objects(hash), similar to creating a hash in ruby h = { |h,k| h[k] = [] }
// why do our 2d arrays have array objects inside of the array instead of the array's value? 
// you can define variables without let, const, or var?!
// var arr = [];
// arr.push([1, 2, 3]);
// console.log(arr);


// Array.prototype.transpose = function () {
//     let transposed = [];

//     for (let i = 0; i < this.length; i++) {

//         let subArr = [];
//         let counter = 0;
//         for (let j = 0; j < this.length; j++) {
//             if (i === counter) {
//                 subArr.push(this[i][j]);
//             };
//             counter++;
//         };
//         transposed.push(subArr);
//     };

//     return transposed;
// };

Array.prototype.transpose = function () {
    let transposed = [];

    for (let i = 0; i < this.length; i++) {

        let subArr = [];
        for (let j = 0; j < this.length; j++) {

            subArr.push(this[j][i]);

        };
        transposed.push(subArr);
    };

    return transposed;
};

// const two_d_arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(two_d_arr.transpose());

// const transposed_arr = [
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9]
// ];



// Array.prototype.myEach(cb) {
//     for (let i = 0; i < this.length; i++) {
//         cb(this[i]);
//     }
// };

Array.prototype.myEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    };
};

Array.prototype.myEach = function () {
    // debugger;
    for (var i = 0; i < this.length; i++) {
        (function (el) {
            el;
        })(this[i]);
    };
};

Array.prototype.myMap = function (cb) {
    let mapped = [];
    this.myEach(cb);
    return mapped;
};

[1, 2, 3].myMap(function (el) {
    return el * 2
});

// console.log([1, 2, 3].myEach());

// const myEach = function (arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i]);
//     };
// };



const callback = function (el) {
    el = el ** 4;
    // console.log(el);
};

// console.log([1, 2, 3, 4, 5].myEach(function (el) {
//     console.log(el * 3);
// }));


// console.log(myEach([4, 5, 6, 7], callback));


// console.log([1, 2, 3, 4, 5].myEach(function (el) {
//     console.log(el);
// }));


