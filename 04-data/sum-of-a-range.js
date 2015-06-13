function range(start, end, step){
	var a = [];

	if(step == undefined){
		if(start<end){		
			for(i=start; i<=end; i++){
			a.push(i);
			}
		} else {
			for(i=start; i<=end; i--){
				a.push(i);
			}
		}	
	} else {
		if(start<end){
			for(i=start; i<=end; i=i+step){
				a.push(i);
			}
		} else {
			for(i=start; i>=end; i=i+step){
				a.push(i);
			}
		}
	}
	return a;
}

function sum(array){
	var sum = 0;
	for(i=0; i<array.length; i++){
		sum += array[i];
	}
	return sum;
}

console.log(range(1,10,2));
console.log(sum(range(1,10)));

console.log(range(5,2,-1));