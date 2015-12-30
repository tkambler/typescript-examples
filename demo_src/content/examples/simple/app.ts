function addNumbers (num1: number, num2: number): number {
    return num1 + num2;
}

function setContainerContents (contents: string) {
    document.getElementById('container').innerHTML = contents;
}

var result = addNumbers(5, 7);

console.log('Result: %s', result);

// setContainerContents(result);

setContainerContents(`Result is: ${result}`);
