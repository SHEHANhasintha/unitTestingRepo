/*
* unit test practies
* Author: Shehan Hasintha
* date: 11:04 p.m 2/11/2019
*/

const mathLib = require('./lib/lib');
const units = require('./lib/unit');


const index = {};

for (let i in units){
	console.log(i);
	units[i]();
}

