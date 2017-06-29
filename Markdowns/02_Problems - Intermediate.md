## 1) SUM ALL NUMBERS IN A RANGE 
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

#### HINT:
- Math.max()
- Math.min()
- Array.prototype.reduce()

#### TEST CASES:
- sumAll([1, 4]) should return a number.
- sumAll([1, 4]) should return 10.
- sumAll([4, 1]) should return 10.
- sumAll([5, 10]) should return 45.
- sumAll([10, 5]) should return 45.

STATUS: DONE


## 2) DIFF TWO ARRAYS

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.


#### HINT:
Comparison Operators
- Array.prototype.slice()
- Array.prototype.filter()
- Array.prototype.indexOf()
- Array.prototype.concat()

#### TEST CASES:
- diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
- ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
- ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
- ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
- [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
- [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
- [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
- [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].

## 3) ROMAN NUMERAL CONVERTER	

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

#### HINT:
Roman Numerals
- Array.prototype.splice()
- Array.prototype.indexOf()
- Array.prototype.join()

#### TEST CASES:

- convertToRoman(2) should return "II".
- convertToRoman(3) should return "III".
- convertToRoman(4) should return "IV".
- convertToRoman(5) should return "V".
- convertToRoman(9) should return "IX".
- convertToRoman(12) should return "XII".
- convertToRoman(16) should return "XVI".
- convertToRoman(29) should return "XXIX".
- convertToRoman(44) should return "XLIV".
- convertToRoman(45) should return "XLV"
- convertToRoman(68) should return "LXVIII"
- convertToRoman(83) should return "LXXXIII"
- convertToRoman(97) should return "XCVII"
- convertToRoman(99) should return "XCIX"
- convertToRoman(500) should return "D"
- convertToRoman(501) should return "DI"
- convertToRoman(649) should return "DCXLIX"
- convertToRoman(798) should return "DCCXCVIII"
- convertToRoman(891) should return "DCCCXCI"
- convertToRoman(1000) should return "M"
- convertToRoman(1004) should return "MIV"
- convertToRoman(1006) should return "MVI"
- convertToRoman(1023) should return "MXXIII"
- convertToRoman(2014) should return "MMXIV"
- convertToRoman(3999) should return "MMMCMXCIX"



## 4) WHEREFORE ART THOU

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

HINT:
- Global Object
- Object.prototype.hasOwnProperty()
- Object.keys()

#### TEST CASES:
- whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
- whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
- whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
- whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].

## 5) SEARCH AND REPLACE

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

#### NOTE: 
- Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

#### HINT:
- Array.prototype.splice()
- String.prototype.replace()
- Array.prototype.join()

#### TEST CASES:
- myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
- myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
- myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
- myReplace("His name is Tom", "Tom", "john") should return "His name is John".
- myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".

## 6) PIG LATIN

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

#### HINT:
- Array.prototype.indexOf()
- Array.prototype.push()
- Array.prototype.join()
- String.prototype.substr()
- String.prototype.split()

#### TEST CASES.
- translatePigLatin("california") should return "aliforniacay".
- translatePigLatin("paragraphs") should return "aragraphspay".
- translatePigLatin("glove") should return "oveglay".
- translatePigLatin("algorithm") should return "algorithmway".
- translatePigLatin("eight") should return "eightway".

## 7) DNA PAIRING

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

#### HINT:
- Array.prototype.push()
- String.prototype.split()

#### TEST CASES:
- pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
- pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
- pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
- bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
- bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
- bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
- bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
- bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").


## 8) MISSING LETTERS

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

#### HINT:
- String.prototype.charCodeAt()
- String.fromCharCode()

#### TEST CASES:
- fearNotLetter("abce") should return "d".
- fearNotLetter("abcdefghjklmno") should return "i".
- fearNotLetter("bcd") should return undefined.
- fearNotLetter("yz") should return undefined.


## 9) BOO WHO	

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

#### HINT:
- Boolean Objects

#### TEST:
- booWho(true) should return true.
- booWho(false) should return true.
- booWho([1, 2, 3]) should return false.
- booWho([].slice) should return false.
- booWho({ "a": 1 }) should return false.
- booWho(1) should return false.
- booWho(NaN) should return false.
- booWho("a") should return false.
- booWho("true") should return false.
- booWho("false") should return false.

## 10) SORTED UNION

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

#### HINT:
- Arguments object
- Array.prototype.reduce()

#### TEST:
- uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
- uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
- uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
- uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].


## 11) CONVERT HTML ENTITIES

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

#### HINT:
- RegExp
- HTML Entities
- String.prototype.replace()

#### TEST CASES:
- convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
- convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
- convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
- convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
- convertHTML("Shindler's List") should return Shindler&​apos;s List.
- convertHTML("<>") should return &​lt;&​gt;.
- convertHTML("abc") should return abc.

## 12) SPINAL TAP CASE

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

#### HINT:
- RegExp
- String.prototype.replace()

#### TEST:
- spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
- spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
- spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
- spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
- spinalCase("AllThe-small Things") should return "all-the-small-things".