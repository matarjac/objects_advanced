// EX-2
// 1.
const myObj = {name: 'obj',
age: 0,
occupation: 'being object',
color: 'black'
}

function objKeys(someObj){
    return Object.keys(someObj);
}

console.log(objKeys(myObj));

// 2.
function objToUpperCase(someObj){
    let convertedObj={}
    let upperKey = '';
    for(const key in someObj){
        upperKey=key.toUpperCase();
        convertedObj[upperKey] = someObj[key];
    }
    return convertedObj;
}

console.log(objToUpperCase(myObj));

// 3.
function returnValues(someObj){
    return Object.values(someObj);
}

console.log(returnValues(myObj));

// 4.
function doubleTheValues(someObj){
    let convertedObj = {};
    let objEntries = Object.entries(someObj);

    objEntries.forEach(pair => {
        console.log(pair);
        convertedObj[pair[0]] = pair[1]+pair[1];
    });

    return convertedObj;
}

console.log(doubleTheValues(myObj));

// 5.
function reverseTheObj(someObj){
    let convertedObj = {};
    let objEntries = Object.entries(someObj);

    objEntries.forEach(pair => {
        console.log(pair);
        convertedObj[pair[1]] = pair[0];
    });

    return convertedObj;
}

console.log(reverseTheObj(myObj));

// 6.
const myNumObj = {
    myAge: 25,
    myHeight: 181,
    myYearOfBirth: 1997
}

function sumTheValues(someObj){
    let sum=0;
    for(const key in someObj){
        sum+= someObj[key];
    }
    return sum;
}

console.log(sumTheValues(myNumObj));

// 7.
function averageTheValues(someObj){
    let sumForAverage = 0;
    values = Object.values(someObj);
    for(let i=0;i<values.length;i++){
        sumForAverage+=values[i];
    }
    return sumForAverage/values.length;
}

console.log(averageTheValues(myNumObj));

// 8.
function sortByTheKeys(someObj){
    let sortedObj = {};
    keys = Object.keys(someObj);
    keys.sort();
    keys.forEach(key => {
        sortedObj[key] = someObj[key];
    });
    return sortedObj;
}

console.log(sortByTheKeys(myObj));

// 9.
function checkIfValueExist(someObj, data){
    let values = Object.values(someObj);
    let result = false;
    values.forEach(value => {if(value==data){result = true}});
    return result;
}

console.log(checkIfValueExist(myObj, 'obj'));
console.log(checkIfValueExist(myObj, 'hello'));
console.log(checkIfValueExist(myNumObj, '1997'));

// 10.
const wordsArray = ['hello', 'goodbye', 'hello', 'someword', 'someword', 'matar', 'hi', 'hi', 'hi'];

function wordFrequency(arr){
    let wordsObj = {};
    for(word of arr){
        if (wordsObj[word] == undefined){
            wordsObj[word] = 1;
        } else{wordsObj[word] = wordsObj[word]+1}
    }
    return wordsObj;
}

console.log(wordFrequency(wordsArray));