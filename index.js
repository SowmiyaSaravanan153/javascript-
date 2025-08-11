
let number = [1,2,3,4,5];

for(let i=number.length; i>= 0 ; i--){

     console.log( number[i]);
}



console.log('-------------');

const arr = [1, 2, 3, 2, 4, 3, 5];
const seen = new Set();
const duplicates = [];

for (let num of arr) {
  if (seen.has(num)) {
    duplicates.push(num);
  } else {
    seen.add(num);
  }
}

console.log(duplicates); 


console.log("------------------");

const arr1= [5, 2, 8, 1];

arr1.sort((a,b) => b-a);

console.log(arr1);

console.log("------------------");


const arr2 = [1,1,2,3,4,4,5,6,6];

function Finddupli(){
       const seen = new Set();
       const duplicates = [];

       for (let num of arr2){
          if (seen.has(num)){
            duplicates.push(num);
          }
          else {
            seen.add(num);
          }
        

       }
         console.log(duplicates);
}


const FilterArray= (arr2, Finddupli);

FilterArray();

