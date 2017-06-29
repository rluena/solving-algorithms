/**
 * Reverse the provided string.
 * 
 * @param {String} str
 * @return {String}
 */
module.exports.reverseString = (str) => {
	var newStr = '';
	for (var i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
}

/**
 * Return the factorial of the provided integer.
 * 
 * @param {Number} num
 * @return {Number}
 */
module.exports.factorize = (num) => {

	var total = 1;

	if (typeof (num) !== 'number') return false;

	if (num === 0) {
		total = 1;
	} else {
		for (var i = 1; i <= num; i++) {
			total *= i;
		}
	}
	return total;
}

/**
 * Return true if the given string is a palindrome. Otherwise, return false.
 * 
 * Removed all non-alphanumeric characters (punctuation, spaces and symbols)
 * 
 * @param {String} str
 * @return {Boolean}
 */
/*module.exports.palindrome = (str) => {

	// Removing white spaces and non-alphanumeric characters
	var str = str.replace(/[\s\W_]+/g, '');
	var newStr = str.split(' ').reverse().join();

	return str === newStr ? true : false;
}*/

/**
 * Find the longest word in a string
 */
module.exports.findLongestWord = (str) => {
	var arr = str.split(' ');
	var len = 0;

	// Options number one
	var longest = arr.reduce((len, next) => {
		if (next.length > len) {
			len = next.length;
		}
		return len;
	}, 0);

	// Options numbe two
	// for (var i = 0; i < arr.length; i++) {
	//     var word = arr[i];
	//     len = word.length > len ? word.length : len;        
	// }
	return longest;
}

/**
 * Capitalize each word from a string
 */
module.exports.titleCase = (str) => {
	var arr = str.split(' ');
	var newStr = arr.map((next) => {
		var newArr = next.toLowerCase().split('');
		var wordCased = '';
		for (var i = 0; i < newArr.length; i++) {
			if (i === 0) {
				wordCased += newArr[i].toUpperCase();
			} else {
				wordCased += newArr[i];
			}
		}
		return wordCased;
	}).join(' ');

	return newStr;
}

/**
 * Find a largest number from four members of array
 */
module.exports.largestOfFour = (arr) => {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		var numberArr = arr[i];		
		var num = numberArr.reduce((largest, next) => {
			largest = next > largest ? next : largest;
			return largest;
		}, 0);
		newArr.push(num);
	}

	return newArr;
}

/**
 * Confirm endings
 */
module.exports.confirmEnding = (word, str) => {
	var count = str.length;
	return word.substr(-count) === str ? true : false; 
}

/**
 * Repeat string number of times
 */
module.exports.repeatStringNumTimes = (str, times) => {
	var newStr = '';
	for (var i = 0; i < times; i++) {
		newStr += str;		
	}
	newStr = times < 0 ? '' : newStr;
	return newStr;
}

/**
 * Trancating string
 */
module.exports.truncateString = (str, len) => {
	var newStr = '';
	if (len >= str.length) {
		newStr = str
	} else {
		len = len > 3 ? len - 3 : len;
		newStr = str.slice(0, len) + '...';
	}

	return newStr;
}

/*var chunkArrayInGroups = (arr, len) => {
	newArr = [];
	return arr.slice(0, 2);
}*/

/*var slasher = (arr, len) => {

	newArr = [];
	// return arr.splice(0, 2);
	return arr.slice(0, 2);
}*/

/**
 * Return true if the string in the first element of 
 * the array contains all of the letters of the string in the second element of the array.
 */
module.exports.mutation = (arr) => {
	var notFound = false;
	for (var i = 0; i < arr[1].length; i++) {
		var char = arr[1][i];
		if (arr[0].toLowerCase().indexOf(char.toLowerCase()) === -1) {
			notFound = true;
		}
	}
	return !notFound;
}

module.exports.destroyer = (arr, ...args) => {	
	var newItem = arr.filter((item, index) => {
		if (args.indexOf(item) === -1) {
			return item;
		}
	});
	return newItem;
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));