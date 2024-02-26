// PASS  tests/twoNumberSum.test.js
// ---------- `Two Number Sum` ----------
//   Valid Cases:
//     √ POST If all values are correct and targetSum can be generated, response should be 200                         
//     √ POST If all values are correct and targetSum can Not be generated, response should be 200 and empty array []
//   Invalid Cases:
//     √ POST If targetSum is 0, response should be 400               
//     √ POST If targetSum is not a Number, response should be 400 
//     √ POST If numbers is empty Array, response should be 400 
//     √ POST If numbers is not an Array, response should be 400 


const dataTest = [
    { // 0
        numbers: [1, 2, 3, 4, 5],
        targetSum: 0,
    },
    { // 1
        numbers: [1, 2, 3, 4, 5],
        targetSum: 'x',
    },
    { // 2
        numbers: [],
        targetSum: 9,
    },
    { // 3
        numbers: [1, 2, 3, 4, 5],
        targetSum: 5,
    },
    { // 4
        numbers: [1, 2, 3, 4, 5],
        targetSum: 12,
    },
    { // 5
        numbers: '[1, 2, 3, 4, 5]',
        targetSum: 12,
    },
    { // 6
        numbers: [1, 2, 3, 4, 5, 5],
        targetSum: 12,
    },
    { // 7
        coins:[1, 1, 2, 3, 5, 7, 22]
    },
    { // 8
        coins:[1, 1, 2, 2, 3, 5, 7, 22]
    },
    { // 9
        coins:[2, 2, 3, 5, 7, 22]
    },
    { // 10
        coins:[]
    },
    { // 11
        coins:'[2, 2, 3, 5, 7, 22]'
    }

];

module.exports = dataTest