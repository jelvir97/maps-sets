// #1 
// code will return a set {1,2,3,4}

//#2 
// code wil return "referee"

//#3
//Map {[1,2,3] => true, [1,2,3] => false}

//hasDuplicate

const hasDuplicate = arr => [...new Set(arr)].length !== arr.length;

//vowelCount

function vowelCount(str){
    const vowelMap = new Map();
    for(let i  of str){
        i = i.toLowerCase();
        if('aeiou'.indexOf(i) !== -1){
            if(vowelMap.has(i)){
                vowelMap.set(i,vowelMap.get(i) +1 );
            }else{
                vowelMap.set(i,1);
            }
        }
    }
    return vowelMap;
} 