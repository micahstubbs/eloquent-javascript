function isEven(number){
	// console.log(number);
	if(number===1){ return false;}
	else if(number===0){ return true;}
	else if(number > 1){ return isEven(number-2);}
	else { return isEven(number+2); }
}

console.log(50);
console.log(isEven(50));

console.log(75);
console.log(isEven(75));

console.log(-1);
console.log(isEven(-1));
