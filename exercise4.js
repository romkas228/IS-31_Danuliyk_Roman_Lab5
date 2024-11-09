function ex4(){
function createArray(n){
    let arr = [];
    for (let i = 0; i< n;i++){
        arr.push(Math.floor(Math.random() * 100));
    }
    console.log(`Input Array`);
    console.log(arr);
    return arr;
    
}
function sumBetweenMinMax (arr){
    let minIndex = arr.indexOf(Math.min(...arr));
    let maxIndex = arr.indexOf(Math.max(...arr));

    let start = Math.min(minIndex,maxIndex)+ 1;
    let end = Math.max(minIndex,maxIndex);
    let sum = 0;
    for( let i=start;i < end;i++ ){
        sum += arr[i];
    }
    
    return sum;
}
function quickSort(arr){
    if (arr.length <= 1) return arr;
    
    let pivot = arr[arr.length - 1];
    let left =[];
    let right = [] ;
    for(let i = 0; i< arr.length - 1 ;i++){
        if (arr [i] < pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}
let n = prompt("Введіть кількість елементів у масиві: ");
let arr = createArray(n);
let sum = sumBetweenMinMax (arr);
console.log(`Cумa елементів між максимальним та мінімальними значеннями масиву - ${sum}`);
let sortedarr = quickSort(arr);
console.log ("Відсортований масив", sortedarr);

}