function doubleLetter(str) {
    return str.split('').map(char => char + char).join('');
}
const originalString = "string";
console.log(doubleLetter(originalString));