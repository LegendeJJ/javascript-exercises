const removeFromArray = function(...args) {
    const array=args[0];
    return array.filter(function(val) {
        return !args.includes(val)
        
    })
}


// Do not edit below this line
module.exports = removeFromArray;
