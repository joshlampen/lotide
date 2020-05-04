# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jlampen/lotide`

**Require it:**

`const _ = require('@jlampen/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Assertion that prints if two arrays are equal
* `assertEqual(...)`: Assertion that prints if two values are equal
* `assertObjectsEqual(...)`: Assertion that prints if two objects are equal
* `countLetters(...)`: Returns an object that tracks the amount of times each letter appears in a given string
* `countOnly(...)`: Returns an object that tracks the amount of times a specified string appears in an array of strings
* `eqArrays(...)`: Compares two arrays and returns a boolean 'true' or 'false'
* `eqObjects(...)`: Compares two Objects and returns a boolean 'true' or 'false'
* `findKey(...)`: Returns a key from an object that satisfies a specified callback function
* `findKeyByValue(...)`: Returns a key from an object that matches a specified value
* `flatten(...)`: Accepts a two-level array of arrays and returns a single-level array
* `head(...)`: Returns the first item of an array
* `letterPositions(...)`: Returns an object containing the index locations of each letter used in a given string
* `map(...)`: Accepts an array of strings and returns a modified array of those strings based on a specified callback function
* `middle(...)`: Returns an array containing the middle value(s) of an array
* `tail(...)`: Removes the first item of an array and returns a new modified array
* `takeUntil(...)`: Returns an array of items from an inputted array (starting from index 0) up until a condition from a specified callback function is satisfied
* `without(...)`: Returns an array of items from an inputted array which does not include a specified value(s)