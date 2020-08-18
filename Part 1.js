var users = [
    {
        username: 'larry',
        email: 'larry@foo.com',
        yearsExperience: 22.1,
        favoriteLanguages: ['Perl', 'Java', 'C++'],
        favoriteEditor: 'Vim',
        hobbies: ['Fishing', 'Sailing', 'Hiking'],
        hometown: {
            city: 'San Francisco',
            state: 'CA'
        }
    },
    {
        username: 'jane',
        email: 'jane@test.com',
        yearsExperience: 33.9,
        favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
        favoriteEditor: 'Emacs',
        hobbies: ['Swimming', 'Biking', 'Hiking'],
        hometown: {
            city: 'New York',
            state: 'NY'
        }
    },
    {
        username: 'sam',
        email: 'sam@test.com',
        yearsExperience: 8.2,
        favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
        favoriteEditor: 'Atom',
        hobbies: ['Golf', 'Cooking', 'Archery'],
        hometown: {
            city: 'Fargo',
            state: 'SD'
        }
    },
    {
        username: 'anne',
        email: 'anne@test.com',
        yearsExperience: 4,
        favoriteLanguages: ['C#', 'C++', 'F#'],
        favoriteEditor: 'Visual Studio Code',
        hobbies: ['Tennis', 'Biking', 'Archery'],
        hometown: {
            city: 'Albany',
            state: 'NY'
        }
    },
    {
        username: 'david',
        email: 'david@test.com',
        yearsExperience: 12.5,
        favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
        favoriteEditor: 'VS Code',
        hobbies: ['Volunteering', 'Biking', 'Coding'],
        hometown: {
            city: 'Los Angeles',
            state: 'CA'
        }
    }
];


// PRINT EMAILS
function printEmails() {
    users.forEach(function (val) {
        console.log(val.email);
    })
}
console.log(printEmails())


// PRINT HOOBIES
function printHobbies() {
    users.forEach(function (val) {
        val.hobbies.forEach(function (value) {
            console.log(value)
        })
    })
}
console.log(printHobbies())


// FIND HOMETOWN BY STATE
function findHometownByState(state) {
    return users.find(function (val) {
        return val[state] = val.hometown.state
    })
}
console.log(findHometownByState('NY'))


//ALL LANGUAGES
function allLanguages() {
    let newLang = [];
    users.map(function (val) {
        val.favoriteLanguages.map(function (value) {
            newLang.push(value)
        })
    })
    return Array.from(new set(newLang))
}
console.log(allLanguages)

//HAS FAVORITE EDITOR
function hasFavoriteEditor(editor) {
    let initial = 0;
    users.map(function (val) {
        if (val.favoriteEditor === editor) {
            initial++
        }
    })
    return initial === 0 ? false : true
}
console.log(hasFavoriteEditor('Python'))

//FIND BY USERNAME
function findByUsername(string) {
    users.forEach(function (val) {
        if (val.username === string) {
            console.log(val)
        }
    })
}
console.log(findByUsername('Nelson'))