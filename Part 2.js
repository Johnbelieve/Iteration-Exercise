//Vowel counts in an array
function vowelCount(string) {
    let stringArr = [...string]
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let object = stringArr.reduce(function (acc, val) {
        if (vowels.indexOf(val) !== -1) {
            acc[val] = (acc[val] || 0) + 1;
        }
        return acc;
    }, {})
    return object;
}
console.log(vowelCount('awesome'))


//Function to remove vowels from the string and return an array
function removeVowels(str) {
    let string = [...str.toLowerCase()]
    let vowels = ['a', 'e', 'i', '0', 'u']
    let output = ''
    string.forEach(function (val) {
        if (vowels.indexOf(val) === -1) {
            output += val
        }
    })
    return [...output]
}
console.log(removeVowels('fun'))