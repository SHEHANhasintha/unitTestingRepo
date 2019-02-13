/*
* main functionality for testing examples
*
*/

const lib = {};

// add two numbers
lib.add = function(num1,num2){
	num1 = typeof(num1) == 'number' ? num1 : false;
	num1 = num1 < 99999999999 ? num1 : false;
	num1 += 0.0000000000001
	num2 = typeof(num2) == 'number' ? num2 : false;
	num2 = num2 < 99999999999 ? num2 : false;
	if (num1  && num2){
		let total = num1 + num2;
		total = total.toPrecision(12);
		lib.cutOff(total);
		return total;
	}else{
		return false;
	}
}


/*
// substract two numbers
lib.sub = function(num1,num2){
	num1 = typeof(num1) == 'number' ? num1 : false;
	num2 = typeof(num2) == 'number' ? num2 : false;
	if (num1 && num2){
		let total = (num1 - num2);
		total = total.toPrecision(12);
		return total;
	}else{
		return false;
	}
}

// multiply two numbers
lib.mul = function(num1,num2){
	num1 = typeof(num1) == 'number' ? num1 : false;
	num2 = typeof(num2) == 'number' ? num2 : false;
	if (num1 && num2){
		let total = (num1 * num2);
		total = total.toPrecision(12);
		return total;
	}else{
		return false;
	}
}

// devide two numbers
lib.dev = function(num1,num2){
	num1 = typeof(num1) == 'number' ? num1 : false;
	num2 = typeof(num2) == 'number' ? num2 : false;
	if (num1 && num2){
		let total = (num1 / num2);
		total = total.toPrecision(12);
		return total;
	}else{
		return false;
	}
}

*/

lib.cutOff = function(num){
	num = typeof(num) == 'number' ? num : false;
	num = toString(num);
	let store = '';
	let go = '';
	let setTrue = false;
	//console.log(num,'tttttttttttttttttttt')
	if (num){
		for (let i=num.length-1; i>0;i--){
			if (!(num[i] == '0')){
				if(!setTrue){
					setTrue = true;
				}
			}
			if (setTrue){
				store += num[i];
			}
		}
		for (let i=num.length-1; i>0;i--){
			
				go += num[i];
			
		}
		//console.log(go,'thug life uhgjkdhgdf')
	}
}

module.exports = lib;