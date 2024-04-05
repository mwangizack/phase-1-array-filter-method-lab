// Code your solution here
function findMatching(driversArray, searchItem){
    const lowercaseSearchItem = searchItem.toLowerCase();
   return driversArray.filter(element => element.toLowerCase() === lowercaseSearchItem);
}

function fuzzyMatch(driversArray, searchItem){
    const searchItemCharacters = searchItem.split('').length;
    // console.log(`Length: ${searchItemCharacters}`);
    return driversArray.filter(element => element.slice(0, searchItemCharacters) === searchItem)
}

// const arr = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
// console.log(fuzzyMatch(arr, 'Sa'))

function matchName(driversArray, searchItem){
    return driversArray.filter(element => element.name === searchItem);
}
