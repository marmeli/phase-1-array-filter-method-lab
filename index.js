// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(names, string) {
    return names.filter(names => names.toUpperCase() === string.toUpperCase());

}

function fuzzyMatch(names, string){
    return names.filter(names => names[0] === string[0])
}

function matchName(name, hometown){
    return name.filter(name => name.name === hometown);

}