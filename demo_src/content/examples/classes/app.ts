class Person {

    /**
     * The use of `public` on constructor arguments is a shorthand for defining
     * public properties on the resulting object.
     */
    constructor(public firstName: string, public lastName: string) {
        console.log('Person constructor', arguments);
    }

}

function setContainerContents (contents: string) {
    document.getElementById('container').innerHTML = contents;
}

function printPerson (person: Person) {
    setContainerContents(`Person: ${person.firstName} ${person.lastName}`);
}

var joe = new Person('Joe', 'Smith');

console.log('joe', joe);
console.log('joe.firstName', joe.firstName);
console.log('joe.lastName', joe.lastName);

printPerson(joe);
