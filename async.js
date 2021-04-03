console.log('before');
console.log('after');

console.log('before 1');
setTimeout(()=>{
    console.log('fetching data from database');
},2000);

console.log('after 1');