/*
* main functionality for testing examples
*
*/

const lib = {};

// add two numbers
lib.add = function(num1,num2){
	num1 = typeof(num1) == 'number' ? num1 : false;
	num2 = typeof(num2) == 'number' ? num2 : false;
	if (num1  && num2){
		return (num1 + num2);
	}else{
		return false;
	}
}

// substract two numbers
lib.sub = function(num1,num2){
	num1 = typeof(num1) == 'number' ? num1 : false;
	num2 = typeof(num2) == 'number' ? num2 : false;
	if (num1 && num2){
		return (num1 - num2);
	}else{
		return false;
	}
}

// multiply two numbers
lib.mul = function(num1,num2){
	num1 = typeof(num1) == 'number' ? num1 : false;
	num2 = typeof(num2) == 'number' ? num2 : false;
	if (num1 && num2){
		return (num1 * num2);
	}else{
		return false;
	}
}

// devide two numbers
lib.dev = function(num1,num2){
	num1 = typeof(num1) == 'number' ? num1 : false;
	num2 = typeof(num2) == 'number' ? num2 : false;
	if (num1 && num2){
		return (num1 / num2);
	}else{
		return false;
	}
}

module.exports = lib;