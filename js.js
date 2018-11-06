var Person = {
	"name": "Random People",
	"nickname": "Arct",
	"job": "Dvornik",
	"adress": {
		"country": "USA",
		"city": "Gomel"
	}
}

function deepCopy(obj) {
    var copy = {};
    for(var i in obj) {
        if (obj[i] instanceof Object)
            copy[i] = deepCopy(obj[i]);
        else
            copy[i] = obj[i];
    }
    return copy;
}

var newPerson = {}
newPerson = deepCopy(Person)
newPerson.adress.city = "Minsk"
console.log(Person.adress.city)
console.log(newPerson.adress.city)
