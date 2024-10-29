function camelCase(str, separator) {
    return str
        .split(separator)                      
        .map((word, index) =>                     
            index === 0
                ? word.toLowerCase()             
                : word.charAt(0).toUpperCase() +
                 word.slice(1)
                .toLowerCase()
        )
        .join('');                                
}

console.log(camelCase('my_name_is_jack', '_'));    
console.log(camelCase('hello-world',  '-'));