let nums=[1,65,87,86,54,24,78];
let result=nums.filter(n=>n%2==0)
.map(n=>n*2)
.reduce((a,b)=>a+b);
console.log(result);