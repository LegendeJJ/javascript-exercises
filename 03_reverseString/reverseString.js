const reverseString = function(string) {
    let reverse= string.split("");
    reverse.reverse();
    reverse = reverse.join("");
    return reverse;

};

// Do not edit below this line
module.exports = reverseString;
