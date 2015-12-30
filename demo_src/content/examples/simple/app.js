function addNumbers(num1, num2) {
    return num1 + num2;
}
function setContainerContents(contents) {
    document.getElementById('container').innerHTML = contents;
}
var result = addNumbers(5, 7);
console.log('Result: %s', result);
setContainerContents("Result is: " + result);
//# sourceMappingURL=app.js.map