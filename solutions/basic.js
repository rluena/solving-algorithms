/**
 * Reverse the provided string.
 * 
 * @param {String} str
 * @return {String}
 */
module.exports.reverseString = (str) => {
	let newStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;

	// Alternative solution
	// return str.split('').reverse().join('');
};

/**
 * Factorialize a Number
 * 
 * Return the factorial of the provided integer.
 * 
 * @param {Number} num
 * @return {Number}
 */
module.exports.factorialize = (num) => {

	let total = 1;
	if (typeof (num) !== 'number') return false;
	
	if (num === 0) {
		total = 1;
	} else {
		for (let i = 1; i <= num; i++) {
			total *= i;
		}
	}
	return total;
};

/**
 * Check for Palindromes
 * 
 * Return true if the given string is a palindrome. Otherwise, return false.
 * 
 * @param {String} str
 * @return {Boolean}
 */
module.exports.palindrome = (str) => {

	// Removing white spaces and non-alphanumeric characters
	let  newStr = str.replace(/[\W_\s]/g, '').toLowerCase();
	let  reversedStr = newStr.split('').reverse().join('');
	
	return newStr === reversedStr ? true : false;
};

/**
 * Find the longest word in a string
 * 
 * Return the length of the longest word in the provided sentence.
 * @param {String} str
 */
module.exports.findLongestWord = (str) => {
	let arr = str.split(' ');

	// First solution
	let longest = arr.reduce((len, next) => {
		if (next.length > len) {
			len = next.length;
		}
		return len;
	}, 0);

	// Alternative solution
	/*let len = 0;
	for (let i = 0; i < arr.length; i++) {
	    let word = arr[i];
	    len = word.length > len ? word.length : len;        
	}*/
	return longest;
};

/**
 * Title Case a Sentence
 * 
 * Return the provided string with the first letter of each word capitalized. 
 * Make sure the rest of the word is in lower case.
 * 
 * @param {String} str
 * @return {String}
 */
module.exports.titleCase = (str) => {
	let arr = str.split(' ');
	let newStr = arr.map((next) => {
		let newArr = next.toLowerCase().split('');
		let wordCased = '';
		for (let i = 0; i < newArr.length; i++) {
			if (i === 0) {
				wordCased += newArr[i].toUpperCase();
			} else {
				wordCased += newArr[i];
			}
		}
		return wordCased;
	}).join(' ');

	return newStr;
};

/**
 * Find Largest Numbers in Arrays
 * 
 * Return an array consisting of the largest number from each provided sub-array. 
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 * 
 * @param {Array} arr
 * @return {Array}
 */
module.exports.largestOfFour = (arr) => {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		let numberArr = arr[i];
		let num = numberArr.reduce((largest, next) => {
			largest = next > largest ? next : largest;
			return largest;
		}, 0);
		newArr.push(num);
	}

	return newArr;
};

/**
 * Confirm Endings
 * 
 * Check if a string (first argument, str) ends with the given target 
 * string (second argument, target).
 * 
 * @param {String} word
 * @param {String} str
 * @return {String}
 * 
 */
module.exports.confirmEnding = (word, str) => {
	let count = str.length;
	return word.substr(-count) === str ? true : false;
};

/**
 *  Repeat a string
 * 
 * Repeat a given string (first argument) num times (second argument). 
 * Return an empty string if num is not a positive number.
 * 
 * @param {String} str
 * @param {Number} times
 * @return {String}
 */
module.exports.repeatStringNumTimes = (str, times) => {
	let newStr = '';
	for (let i = 0; i < times; i++) {
		newStr += str;
	}
	newStr = times < 0 ? '' : newStr;
	return newStr;
};

/**
 * Truncating String
 * 
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
 * Return the truncated string with a ... ending.
 * 
 * @param {String} str
 * @param {Number} len * 
 * @return {String}
 */
module.exports.truncateString = (str, len) => {
	let newStr = '';
	if (len >= str.length) {
		newStr = str;
	} else {
		len = len > 3 ? len - 3 : len;
		newStr = str.slice(0, len) + '...';
	}

	return newStr;
};

/**
 * Chunky Monkey
 * 
 * Write a function that splits an array (first argument) into groups the length of 
 * size (second argument) and returns them as a two-dimensional array.
 * 
 * @param {Array} arr
 * @param {Number} len
 * @return {Array}
 */
module.exports.chunkArrayInGroups = (arr, len) => {
	const newArr = [];
	let jump = len - 1;

	for (let i = 0; i < arr.length; i + jump) {
		let item = arr.splice(i, len);
		newArr.push(item);
	}
	return newArr;
};

/**
 * Slasher Flick
 * 
 * Return the remaining elements of an array after chopping off n elements from the head.
 * 
 * @param {Array} arr
 * @param {Number} len
 * @return {Array}
 */
module.exports.slasher = (arr, len) => {
	const newArr = [];
	for (let i = len; i < arr.length; i++) {
		const item = arr[i];
		newArr.push(item);
	}
	return newArr;
};

/**
 * Mutations
 * 
 * Return true if the string in the first element of 
 * the array contains all of the letters of the string in the second element of the array.
 * 
 * @param {Array} arr
 * @return {Boolean}
 */
module.exports.mutation = (arr) => {
	let notFound = false;
	for (let i = 0; i < arr[1].length; i++) {
		let char = arr[1][i];
		if (arr[0].toLowerCase().indexOf(char.toLowerCase()) === -1) {
			notFound = true;
		}
	}
	return !notFound;
};

/**
 *  Seek and Destroy
 * 
 * You will be provided with an initial array (the first argument in the destroyer function), 
 * followed by one or more arguments. 
 * Remove all elements from the initial array that are of the same value as these arguments.
 * 
 * @param {Array} arr
 * @param {Array} arguments
 * @return {Array}
 */
module.exports.destroyer = (arr, ...args) => {
	let newItem = arr.filter((item) => {
		if (args.indexOf(item) === -1) {
			return item;
		}
	});
	return newItem;
};

module.exports.getIndexToIns = (arr, num) => {
	let pos;

	const sortedArr = arr.sort((prev, next) => {
		return prev - next;
	});

	if (sortedArr.indexOf(num) !== -1) {
		pos = sortedArr.indexOf(num);
	} else if (num > sortedArr[sortedArr.length - 1]) {
		pos = sortedArr.length;	
	} else {

		for (let i = 0; i < sortedArr.length; i++) {
			let item = sortedArr[i];
			let nextItem = sortedArr[i + 1];

			if (num > item && num < nextItem) {
				pos = i + 1;
			}
		}
	}

	return pos;
};

/**
 * ROT13
 * 
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift 
 * cipher the meanings of the letters are shifted by some set amount.
 * 
 * @param {String} str
 * @return {String}
 */
module.exports.rot13 = (str) => {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		let code = char.charCodeAt(0);

		if (char.match(/[A-Z]/) !== null) {
			code += 13;
			if (code > 90) {
				code = code - 90;
				code = code + 64;
			}
		}
		newStr += String.fromCharCode(code);
	}
	return newStr;
};