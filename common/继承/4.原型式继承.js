function object(o) {
    function F() {};
    F.prototype = o;
    return new F();
}
var person = {
    name: "lly",
    friends: ['Shelby','Court','Van']
}

var anotherPerson = object(person);

anotherPerson.name = "Greg";
anotherPerson.friends.push('Rob')

var anotherPerson1 = object(person);
anotherPerson1.name = "Greg1";
anotherPerson1.friends.push('Rob1');


console.log('yao-coding  person=>',person.friends)