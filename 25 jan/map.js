let map=new Map();
map.set("Himanshu","nodejs");
map.set("sudha","java");
map.set("Rahul","react.js");

// console.log(map.keys());
// console.log(map.get("Rahul"));

// for(let [k,v] of map){
//     console.log(k,":",v);

// }
map.forEach((v,k)=>{
    console.log(v,":",k)
});
