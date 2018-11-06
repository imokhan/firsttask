var Person = {
	"name": "Barry Alen",
	"nickname": "Flash",
	"job": "Forensic scientist",
	"adress": {
		"country": "USA",
		"city": "Central-city"
	}
}

function deepCopy(obj) {
    var copy = {};
    for(var i in obj) {
        if(obj[i] != null &&  typeof(obj[i])=="object")
            copy[i] = deepCopy(obj[i]);
        else
            copy[i] = obj[i];
    }
    return copy;
}

var newPerson = {}
newPerson = deepCopy(Person)
newPerson.adress.city = "Washington"
console.log(Person.adress.city)
console.log(newPerson.adress.city)