function ex3(){
let arr1 = [1,2,3,4,5,6];
let arr2 = [7,8,9,10,11,12];

function makeArray(firstArray,secondArray,maxLength){
    let newArr = firstArray.concat(secondArray);

    if(newArr.length > maxLength){
        console.log( newArr.slice(0,maxLength));
    }
    else{
        console.log(newArr)
    }
}
console.log(`----------Exercise3----------`)
makeArray(arr1,arr2,13);
makeArray(arr1,arr2,10);
}