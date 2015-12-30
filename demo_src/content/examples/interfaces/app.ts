interface Person {

    firstName: string;

    // An optional property
    middleName?: string;

    lastName: string;

}

function setContainerContents (contents: string) {
    document.getElementById('container').innerHTML = contents;
}

function printPerson (person: Person) {
    setContainerContents(`Person: ${person.firstName} ${person.lastName}`);
}

var goodPerson = {
    'firstName': 'John',
    'lastName': 'Doe'
};

var badPerson = {
    'middleName': 'Steve'
};

printPerson(goodPerson);
// printPerson(badPerson);
