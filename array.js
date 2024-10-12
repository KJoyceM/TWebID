const arr = [1,2,3,4]; 

const lastEl= arr.pop(); 

console.log(lastEl); 

console.log(arr); 

console.log(arr.slice(0,2));

for (let i = 0; i<arr.length; i++ ){
    console.log(arr[i]); 
}

for (el of arr ){
    console.log(el);
}

for (index in arr ){
    console.log(index)
}

arr.forEach((el , index)=>{
    console.log(el)
})

