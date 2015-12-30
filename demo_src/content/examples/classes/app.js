var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        console.log('Person constructor', arguments);
    }
    return Person;
})();
function setContainerContents(contents) {
    document.getElementById('container').innerHTML = contents;
}
function printPerson(person) {
    setContainerContents("Person: " + person.firstName + " " + person.lastName);
}
var joe = new Person('Joe', 'Smith');
console.log('joe', joe);
console.log('joe.firstName', joe.firstName);
console.log('joe.lastName', joe.lastName);
printPerson(joe);
//# sourceMappingURL=app.js.map