var ancestry = JSON.parse(require('./notes/ancestry.js'));
var Sparkline = require('clui').Sparkline;

function average(array){
	function plus(a,b) { return a + b; }
	return array.reduce(plus) / array.length;
}

function lifespan(el){
	return el.died - el.born;
}

function century(el){
	return Math.ceil(el.died / 100);
}

//console.log(ancestry.map(century));

function groupBy(array, f){
	var groups = {}
	array.forEach(function(el, index){
		if(!groups.hasOwnProperty(f(el))) groups[f(el)] = [];
		groups[f(el)].push(el);
	})
	return groups;
}

// console.log(groupBy(ancestry, century))

byCentury = groupBy(ancestry, century)
var averageLifespans = [];

for(century in byCentury){
	var lifespans = byCentury[century].map(function(el){
	 return lifespan(el); 
	})
	var averageLifespan = Math.round( average(lifespans) * 10) / 10;
	averageLifespans.push(averageLifespan);
	console.log(century + ": " + averageLifespan);
}
console.log("lifespan by century - last value (max value)");
console.log(Sparkline(averageLifespans, ' years'));

// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94