const palindromes = function (str) {
    let removeSpecials=str.split("").filter(char => /[a-zA-Z0-9]/.test(char)).join("")
    
    let cleaned=removeSpecials.toLowerCase().replaceAll(",","")
    let newStr=cleaned.split("").reverse().join("");
    return (newStr===cleaned);

};

// Do not edit below this line
module.exports = palindromes;
