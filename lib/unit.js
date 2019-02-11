/*
*
* units
*
*/


const units = {};
const lib = require('./lib');
const assert = require('assert');


//add test
units['add opration should come out with a number'] = function(){
	const mat = {};

	mat['integer'] = function() {assert.equal(lib.add(1,2),3)}
	mat['integer/float'] = function() {assert.equal(lib.add(1,2.2),3.2)}
	mat['float[n]/float'] = function() {assert.equal(lib.add(-1,2.2),0.2)}
	mat['float[n]/float[n]'] = function() {assert.equal(lib.add(-1.2,-2.2),3.2)}
	mat['float[long]/float[long]'] = function() {assert.equal(lib.add(1.2456,2.2456),3.4912)}
	mat['float[long]/float[short]'] = function() {assert.equal(lib.add(1.2564,2.2),3.4564)}
	mat['float[long-n]/float[long-n]'] = function() {assert.equal(lib.add(-1.2453,-2.2534),-3.4987)}
	mat['float[long-n]/float[n]'] = function() {assert.equal(lib.add(-1.24567,-2.2),-3.44567)}
	mat['float/float[long-n]'] = function() {assert.equal(lib.add(1.2,-2.2786),0.2786)}
	mat['zero/float[long-n]'] = function() {assert.equal(lib.add(0,-1.564),-1.564)}
	mat['integer[long]/integer[long]'] = function() {assert.equal(lib.add(1546456456453645645364564564563456,56767576576576567567567576567567),72232141141113024021213222213201)}


	for (let untiRun in mat){
		console.log(untiRun);
		try{
		mat[untiRun]();
		}catch(e){
			console.log(untiRun);
			console.log(e);
		}
		debugger;
		//assert.equal(typeof(lib.add(1,2)),'number');
	}

}

//add test
units['sub opration should come out with a number'] = function(){
	console.log('ddd')
	assert.equal(typeof(lib.sub(1,2)),'number');
}

//add test
units['mul opration should come out with a number'] = function(){
	console.log('ddd')
	assert.equal(typeof(lib.mul(1,2)),'number');
}

//add test
units['dev opration should come out with a number'] = function(){
	console.log('ddd')
	assert.equal(typeof(lib.dev(1,2)),'number');
}



module.exports = units;