const mocha = require('mocha');
const expect = require('chai').expect;
const assert = require('chai').assert;
const reverseString = require('../solutions/basic').reverseString;
const factorialize = require('../solutions/basic').factorialize;
const palindrome = require('../solutions/basic').palindrome;
const findLongestWord = require('../solutions/basic').findLongestWord;
const titleCase = require('../solutions/basic').titleCase;
const confirmEnding = require('../solutions/basic').confirmEnding;
const repeatStringNumTimes = require('../solutions/basic').repeatStringNumTimes;
const truncateString = require('../solutions/basic').truncateString;
const chunkArrayInGroups = require('../solutions/basic').chunkArrayInGroups;
const slasher = require('../solutions/basic').slasher;
const mutation = require('../solutions/basic').mutation;
const getIndexToIns = require('../solutions/basic').getIndexToIns;
const destroyer = require('../solutions/basic').destroyer;
const rot13 = require('../solutions/basic').rot13;

describe('Basic Algorithms', () => {

	describe('#reverseString', () => {
		it('should return a string', () => {
			expect(reverseString('Hello!')).to.be.a('string');
		});

		it('should return a !olleH', () => {
			expect(reverseString('Hello!')).to.be.equal('!olleH');
		});
	});

	describe('#factorialize', () => {
		it('should be a number', () => {
			expect(factorialize(5)).to.be.a('number');
			expect(factorialize('some string')).to.be.equal(false);
		});

		it('should return 1, 120, 3628800 and 2432902008176640000', () => {
			expect(factorialize(0)).to.be.equal(1);
			expect(factorialize(5)).to.be.equal(120);
			expect(factorialize(10)).to.be.equal(3628800);
			expect(factorialize(20)).to.be.equal(2432902008176640000);
		});
	});

	describe('#palindrome', () => {
		it('should be a boolean', () => {
			expect(palindrome('eye')).to.be.a('boolean');
		});

		it('should be true', () => {
			expect(palindrome('eye')).to.be.equal(true);
		});

		it('should be true', () => {
			expect(palindrome('_eye')).to.be.equal(true);
		});

		it('should be true', () => {
			expect(palindrome('race car')).to.be.equal(true);
		});

		it('should be true', () => {
			expect(palindrome('A man, a plan, a canal. Panama')).to.be.equal(true);
		});

		it('should be true', () => {
			expect(palindrome('never odd or even')).to.be.equal(true);
		});

		it('should be true', () => {
			expect(palindrome('My age is 0, 0 si ega ym.')).to.be.equal(true);
		});

		it('should be true', () => {
			expect(palindrome('0_0 (: /-\ :) 0-0')).to.be.equal(true);
		});

		it('should be false', () => {
			expect(palindrome('five|\_/|four')).to.be.equal(false);
		});

		it('should be false', () => {
			expect(palindrome('nope')).to.be.equal(false);
		});

		it('should be false', () => {
			expect(palindrome('almostomla')).to.be.equal(false);
		});

		it('should be false', () => {
			expect(palindrome('not a palindrome')).to.be.equal(false);
		});

		it('should be false', () => {
			expect(palindrome('1 eye for of 1 eye.')).to.be.equal(false);
		});
	});

	describe('#findLongestWord', () => {
		it('should be a number', () => {
			expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.be.a('number');
		});

		it('should be equal 6', () => {
			expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.be.equal(6);
		});

		it('should be equal to 5', () => {
			expect(findLongestWord('May the force be with you')).to.be.equal(5);
		});

		it('should be equal to 6', () => {
			expect(findLongestWord('Google do a barrel roll')).to.be.equal(6);
		});

		it('should be equal to 8', () => {
			expect(findLongestWord('What is the average airspeed velocity of an unladen swallow')).to.be.equal(8);
		});

		it('should be equal to 19', () => {
			expect(findLongestWord('What if we try a super-long word such as otorhinolaryngology')).to.be.equal(19);
		});
	});

	describe('#titleCase', () => {
		it('should be a string', () => {
			expect(titleCase('I\'m a little tea pot')).to.be.a('string');
		});

		it('should be equal "I\'m A Little Tea Pot"', () => {
			expect(titleCase('I\'m a little tea pot')).to.be.equal("I'm A Little Tea Pot");
		});

		it('should be equal to "Short And Stout"', () => {
			expect(titleCase('sHoRt AnD sToUt')).to.be.equal('Short And Stout');
		});

		it('should be equal to "Here Is My Handle Here Is My Spout"', () => {
			expect(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')).to.be.equal('Here Is My Handle Here Is My Spout');
		});
	});

	describe('#confirmEnding', () => {
		it('should be a boolean', () => {
			expect(confirmEnding("Bastian", "n")).to.be.a('boolean');
		});

		it('should return true', () => {
			expect(confirmEnding("Bastian", "n")).to.be.equal(true);
		});

		it('should return false', () => {
			expect(confirmEnding("Connor", "n")).to.be.equal(false);
		});

		it('should return false', () => {
			expect(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")).to.be.equal(false);
		});

		it('should return true', () => {
			expect(confirmEnding("Open sesame", "same")).to.be.equal(true);
		});

		it('should return false', () => {
			expect(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")).to.be.equal(false);
		});
	});

	describe('#repeatStringNumTimes', () => {
		it('should return a string', () => {
			expect(repeatStringNumTimes("*", 3)).to.be.a("string");
		});

		it('should be equal to ***', () => {
			expect(repeatStringNumTimes("*", 3)).to.be.equal("***");
		});

		it('should be equal to abcabcabc', () => {
			expect(repeatStringNumTimes("abc", 3)).to.be.equal("abcabcabc");
		});

		it('should be equal to abcabcabcabc', () => {
			expect(repeatStringNumTimes("abc", 4)).to.be.equal("abcabcabcabc");
		});

		it('should be equal to abc', () => {
			expect(repeatStringNumTimes("abc", 1)).to.be.equal("abc");
		});

		it('should be eaqual to *******', () => {
			expect(repeatStringNumTimes("*", 8)).to.be.equal("********");
		});

		it('should return empty string', () => {
			expect(repeatStringNumTimes("abc", -2)).to.be.equal("");
		});
	});

	describe('#truncateString', () => {
		it('should return a string', () => {
			expect(truncateString("A-tisket a-tasket A green and yellow basket", 11)).to.be.a("string");
		});

		it('should be return A-tisket...', () => {
			expect(truncateString("A-tisket a-tasket A green and yellow basket", 11)).to.be.equal("A-tisket...");
		});

		it('should be equal to Peter Piper...', () => {
			expect(truncateString("Peter Piper picked a peck of pickled peppers", 14)).to.be.equal("Peter Piper...");
		});

		it('should be equal to A-tisket a-tasket A green and yellow basket', () => {
			expect(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)).to.be.equal("A-tisket a-tasket A green and yellow basket");
		});

		it('should be equal to abc', () => {
			expect(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)).to.be.equal("A-tisket a-tasket A green and yellow basket");
		});

		it('should be eaqual to *******', () => {
			expect(truncateString("A-", 1)).to.be.equal("A...");
		});

		it('should return empty string', () => {
			expect(truncateString("Absolutely Longer", 2)).to.be.equal("Ab...");
		});
	});

	describe('#chunkArrayInGroups', () => {
		it('should return an array', () => {
			expect(chunkArrayInGroups(["a", "b", "c", "d"], 2)).to.be.a("array");
		});
		
		it('should be equal to [["a", "b"], ["c", "d"]', () => {
			assert.deepEqual(chunkArrayInGroups(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]]);
		});
		
		it('should be equal to [[0, 1, 2], [3, 4, 5]]', () => {
			assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]]);
		});
	
		it('should be equal to [[0, 1], [2, 3], [4, 5]]', () => {
			assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]]);
		});
		
		it('should be equal to [[0, 1], [2, 3], [4, 5]]', () => {
			assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]]);
		});
		
		it('should be equal to [[0, 1, 2], [3, 4, 5], [6]', () => {
			assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [[0, 1, 2], [3, 4, 5], [6]]);
		});
		
		it('should be equal to [[0, 1], [2, 3], [4, 5], [6, 7], [8]]', () => {
			assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
		});
	});

	describe('#slasher', () => {
		it('should be return an array', () => {
			expect(slasher([1, 2, 3], 2)).to.be.a('array');
		});
		
		it('should be equal to [3]', () => {
			assert.deepEqual(slasher([1, 2, 3], 2), [3]);
		});

		it('should be equal to [1, 2, 3]', () => {
			assert.deepEqual(slasher([1, 2, 3], 0), [1, 2, 3]);
		});

		it('should be equal to [].', () => {
			assert.deepEqual(slasher([1, 2, 3], 9), []);
		});

		it('should be equal to []', () => {
			assert.deepEqual(slasher([1, 2, 3], 4), []);
		});

		it('should be equal to ["fries", "shake"]', () => {
			assert.deepEqual(slasher(["burgers", "fries", "shake"], 1), ["fries", "shake"]);
		});
		
		it('should be equal to ["cheese", 4]', () => {
			assert.deepEqual(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5), ["cheese", 4]);
		});
	});

	describe('#mutation', () => {
		it('should return boolean', () => {
			expect(mutation(["hello", "hey"])).to.be.a('boolean');
		});

		it('should return false', () => {
			expect(mutation(["hello", "hey"])).to.be.equal(false);
		});

		it('should return true', () => {
			expect(mutation(["hello", "Hello"])).to.be.equal(true);
		});

		it('should return true', () => {
			expect(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).to.be.equal(true);
		});

		it('should return true', () => {
			expect(mutation(["Mary", "Army"])).to.be.equal(true);
		});

		it('should return true', () => {
			expect(mutation(["Mary", "Aarmy"])).to.be.equal(true);
		});

		it('should return true', () => {
			expect(mutation(["Alien", "line"])).to.be.equal(true);
		});

		it('should return true', () => {
			expect(mutation(["floor", "for"])).to.be.equal(true);
		});

		it('should return false', () => {
			expect(mutation(["hello", "neo"])).to.be.equal(false);
		});

		it('should return false', () => {
			expect(mutation(["voodoo", "no"])).to.be.equal(false);
		});
	});

	describe('#getIndexToIns', () => {
		it('should be a number', () => {
			expect(getIndexToIns([5, 3, 20, 3], 5)).to.be.a('number');
		});
	
		it('should be equal to 2', () => {
			expect(getIndexToIns([5, 3, 20, 3], 5)).to.be.equal(2);
		});
		
		it('should be equal to 2', () => {
			expect(getIndexToIns([2, 20, 10], 19)).to.be.equal(2);
		});
		
		it('should be equal to 3', () => {
			expect(getIndexToIns([2, 5, 10], 15)).to.be.equal(3);
		});
		
		it('should be equal to 0', () => {
			expect(getIndexToIns([3, 10, 5], 3)).to.be.equal(0);
		});
		
		it('should be equal to 1', () => {
			expect(getIndexToIns([40, 60], 50)).to.be.equal(1);
		});
		
		it('should be equal to 2', () => {
			expect(getIndexToIns([10, 20, 30, 40, 50], 30)).to.be.equal(2);
		});
		
		it('should be equal to 3', () => {
			expect(getIndexToIns([10, 20, 30, 40, 50], 35)).to.be.equal(3);
		});
	});

	describe('#ROT13', () => {
		it('should be return [1, 1]', () => {
			assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1]);
		});

		it('should be equal to [1, 5, 1]', () => {
			assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1]);
		});

		it('should be equal to [1]', () => {
			assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1]);
		});

		it('should be equal to []', () => {
			assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), []);
		});

		it('should be equal to ["hamburger"]', () => {
			assert.deepEqual(destroyer(["tree", "hamburger", 53], "tree", 53), ["hamburger"]);
		});
	});

	describe('#cipher', () => {
		it('should be a string', () => {
			expect(rot13("SERR PBQR PNZC")).to.be.a('string');
		});
		
		it('should be equal to "FREE CODE CAMP"', () => {
			expect(rot13("SERR PBQR PNZC")).to.be.eq('FREE CODE CAMP');
		});
		
		it('should be equal to "FREE PIZZA!"', () => {
			expect(rot13("SERR CVMMN!")).to.be.eq('FREE PIZZA!');
		});
		
		it('should be equal to "FREE LOVE?"', () => {
			expect(rot13("SERR YBIR?")).to.be.eq('FREE LOVE?');
		});
		
		it('should be equal to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."', () => {
			expect(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")).to.be.eq('THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.');
		});
	})
});