let emp=new Map();
emp.set("rohit","101");
emp.set("himanshu","102");
emp.set("dev","103");
emp.set("shrey","104");
emp.set("vipul","104");

//map
console.log(emp.keys());

//get
console.log(emp.get("dev"));

//has
console.log(emp.has("rohit"))

//set
console.log(emp)

//forEach

emp.forEach((k,v)=>{
    console.log(k,":",v);
});
