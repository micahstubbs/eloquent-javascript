var ancestry = JSON.parse(require('./notes/ancestry.js'))

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
function hasKnownMother(person){
	return byName[person.mother]!=undefined ? true : false;
}

//console.log(ancestry[0]);
//console.log(hasKnownMother(ancestry[0]));

var withKnownMothers = ancestry.filter(hasKnownMother);
//console.log(withKnownMothers);

var knownMothers = [];
withKnownMothers.forEach(function(person, i) {
	var mother = {}
  mother['name'] = person['mother'];
  mother['child'] = person['name'];
  mother['birthYear'] = person['born'];
  knownMothers.push(mother);
});

console.log(knownMothers);



// → 31.2