/**
 * SUM ALL
 * 
 * We'll pass you an array of two numbers. 
 * Return the sum of those two numbers and all numbers between them.
 * 
 * @param {Array}
 * @return {Number}
 */
module.exports.sumAll = () => {

}

/**
 * DIFF TWO ARRAYS
 * 
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
 * In other words, return the symmetric difference of the two arrays.
 * 
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
module.exports.diffArray = (arr1, arr2) => {
    let long = [];
    let short = [];
    let newArr = [];

    if (arr1.length >= arr2.length) {
        long = arr1;
        short = arr2;
    } else {
        long = arr2;
        short = arr1
    }

    for (var i = 0; i < long.length; i++) {
        var item = long[i];
        
        for (var j = 0; j < short.length; j++) {
            var element = short[j];

            if (j === 'undefined') {
                if (newArr.indexOf(long[i] === -1)) {
                    newArr.push(long[i]);                    
                }
            } else {
                if (long.indexOf(element) === -1 && newArr.indexOf(element) === -1) {
                    newArr.push(element);
                }
                
                if (short.indexOf(item) === -1 && newArr.indexOf(item) === -1) {
                    newArr.push(item);
                }                
            }
        }
    }
    return newArr;
}

module.exports.convertToRoman = (int) => {
    // let pos = 0;
    // reverDig = int.split().reverse().join();

    // for (var i = 0; i < reverDig.length; i++) {
    //     var nD = reverDig[i];
    // }
    // digits = [I, V, X, L, C, D, M];
    // 1, 5, 10, 50, 100, 500, 1000
}

// console.log(convertToRoman(45))