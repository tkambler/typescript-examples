function setContainerContents(contents) {
    document.getElementById('container').innerHTML = contents;
}
function printPerson(person) {
    setContainerContents("Person: " + person.firstName + " " + person.lastName);
}
var goodPerson = {
    'firstName': 'John',
    'lastName': 'Doe'
};
var badPerson = {
    'middleName': 'Steve'
};
printPerson(goodPerson);
//# sourceMappingURL=app.js.map