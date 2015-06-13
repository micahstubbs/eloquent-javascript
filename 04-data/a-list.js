function arrayToList(array){
	var list = null;
	for(var i = array.length - 1; i >= 0; i--){
		list = {
			value: array[i],
			rest: list
		}
	//console.log(list);
	}
	return list;
}

function listToArray(list){
	var array = [];
	for(var node=list; node; node=node.rest){
		array.push(node.value);
	}
	return array;
}

function prepend(el, list){
	var newList = {
		value: el,
		rest: list
	}
	return newList;
}

function nth(list, position){
	var result = undefined;
	for(var node=list, i=0; node; node=node.rest, i++){
		if(i===position){
			//console.log(position + " " + node.value);
			result = node.value;
		}
	}
	return result;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};