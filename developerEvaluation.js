var myTestObject = require('./testFile.js');

var myTest = new myTestObject;

function printStarred(isStarred){
	console.log("isStarred = " + isStarred);
}

function printIDs(IDs) {
	for(var i in IDs) {
		console.log(IDs[i]);
	}
}

function add(o) {
    return {val: o.a + o.b };
}

myTest.getGists(printIDs);

myTest.isStared("8937846762524", printStarred);

var fs = require('fs');
console.log(myTest.transformRows(JSON.parse(fs.readFileSync("dbSample.json", 'utf8')), "MSG_TYPE", "MSG_TYPE_EXT"));

myTest.convertFile("calc.json", add , "calcOut.json")