function reverseArray(array){
	var newArray = [];
	for(i=0; i<array.length; i++){
		newArray.unshift(array[i]);
	}
	return newArray;
}

function reverseArrayInPlace(array){
	for(i=0; i<(Math.floor(array.length/2)); i++){
		var j = array[i]
		array[i] = array[array.length-1-i];
		array[array.length-1-i] = j;
	}
	return array;
}

console.log(reverseArray(["A", "B", "C"]))
var arrayValue = [1,2,3,4,5];
console.log(reverseArrayInPlace(arrayValue))