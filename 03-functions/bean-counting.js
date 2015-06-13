function countBs(s){
	console.log("counting B's in " + s);
	counter = 0;
	for(i=0; i<s.length; i++){
		if( s.charAt(i) ==="B"){ counter++; }
	}
	return counter;
}

function countChar(string, character){
	console.log("counting " + character + "'s in " + string);
	counter = 0;
	for(i=0; i<string.length; i++){
		if(string.charAt(i) === character){ counter++; }
	}
	return counter;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
