function padString(str, length, symbol, toLeft = false) {
    if (str.length >= length) {
        return str;
    }

    const padding = symbol.repeat(length - str.length);
    return toLeft ? padding + str : str + padding; 
    }
console.log(padString('text', 6, '*'));       
console.log(padString('text', 6, '*', true)); 
console.log(padString('text', 4, '*'));