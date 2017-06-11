/**
 * @param {String} str
 * @return {String}
 */
module.exports.reverseString = function (str) {
    var newStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

/**
 * @param {Number} num
 * @return {Number}
 */
module.exports.factorize = function( num ){

    var total = 1;

    if (typeof(num) !== 'number') return false;

    if (num === 0) {
        total = 1;
    } else {
         for(var i = 1; i <= num; i++){
             total *= i;
         }
    }
    return total;
}