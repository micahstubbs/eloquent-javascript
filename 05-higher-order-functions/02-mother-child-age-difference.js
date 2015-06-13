var ancestry = JSON.parse(require('./notes/ancestry.js'));

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


// thinking about the case where one mother
// has multiple children
var knownMothers = [];
withKnownMothers.forEach(function(person, i) {
	var mother = {}
  mother['name'] = person['mother'];
  mother['born'] = byName[person['mother']]['born']
  mother['child'] = person['name'];
  mother['boreChild'] = person['born'];
  mother['ageAtChildbirth'] = 
  	person['born'] - byName[person['mother']]['born'];
  knownMothers.push(mother);
});

//console.log(knownMothers);

var averageMotherAgeAtBirth = average(knownMothers.map(function(mother){
	return mother.ageAtChildbirth;
}))

console.log(averageMotherAgeAtBirth);

// → 31.2