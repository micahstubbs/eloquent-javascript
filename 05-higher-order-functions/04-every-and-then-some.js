// Your code here.
function every(array, predicate){
	var flag = true;
	array.forEach(function(el){
		//console.log(predicate(el));
		if(!predicate(el)){
			flag = false;
			return
		}
	})
	return flag;
}

function some(array, predicate){
	var flag = false;
	array.forEach(function(el){
		if(predicate(el)) 
			flag = true;
			return
	})
	return flag;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false