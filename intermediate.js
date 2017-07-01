/**
 * SUM ALL
 * 
 * We'll pass you an array of two numbers. 
 * Return the sum of those two numbers and all numbers between them.
 * 
 * @param {Array}
 * @return {Number}
 */
module.exports.sumAll = (arr) => {
	let total = 0;

	const max = arr.reduce(function (a, b) {
		return Math.max(a, b);
	});
	const min = arr.reduce(function (a, b) {
		return Math.min(a, b);
	});

	for (let i = min; i <= max; i++) {
		total += i;
	}
	return total;
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
		short = arr1;
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

}