// arrow function

// const add=(a,b)=>console.log(a+b);
// add(3,5);

// const person=(fname,age)=>{
//     console.log(`hello ${fname}`+`${age}`)
// }
// person('preeti',19);

// function 

// let arr=[1,2,3,4,5,6,7,8];
// let arr1=[10,11,12];
// function num(){
// let table=arr.concat(arr1);
// let r=table[1];
// // console.log(r);
// let i=1;
// while(i<=10){
//     console.log(i*2);
//     i=i+1;
// }
// }
// console.log(num());


// shallow copy

// let preson={
//     fname:'preeti',
//     last:'diwakr',
//     age:19,
//     address:{
//         city:'kanpur',
//     }
// }
// let user=Object.assign({},preson);
// user.address.city='kanpur',
// console.log(user);


// shallow copy

// let preson={
//     fname:'preeti',
//     last:'diwakr',
//     age:19,
//     address:{
//         city:'kanpur',
//     }
// }
// let user={...preson};
// user.address.city='kanpur',
// console.log(user);


// deep copy


// let person = {
//     fname:'preeti',            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
//     last:'diwakar',
//     address:{
//         city:'kanpur',
//     },
//     sayhell(){
//         return("hello")
//     }
// }
// let user=_.clonedeep(person);
// console.log(person)


// deep copy

// let person={
//     first:'priyanka',
//     last:'diwakar',
//     age:20,
//     address:{
//         city:'kanpur',
//     }
// }
// let user=JSON.parse(JSON.stringify(person));
// user.address.city='delhi',
// console.log(user);


// constructor function

// function person(fname,last,age){
//     this.firstName=fname;
//     this.lastName=last;
//     this.age=age;
// }
// let person1=new person('preeti','diwakar',19);
// console.log(person1)


 
// function person(first,last,age){
//     return{
//         firstName:first,
//         lastName:last,
//         age:age,
//     }
// }
// let person1=person('preeti','diwakar',19)
// console.log(person1)



// hosting


// x=6;
// console.log(x);
// var x;


// destuscturing

// let arr = [1,2,3,4,5,6,7,8]
// let [a,b,c, ...rest]=arr
// console.log(a,b,c,rest);

// let arr = [1,2,3,4,5,6,7,8]
// let {a,b} = {a:1,b:5}
// console.log(a,b)


// spread 


// let arr = [1,2,3]
// let obj = {...arr}
// console.log(obj)

// In


// let person={
//     fname:'preeti',
//     last:'diwakar',
//     agr:19,
// }
// // console.log("username" in person);
// console.log("fname" in person);

// let person={
//     fname:'preeti',
//     last:'diwakar',
//     agr:19,
//     address:{
//         city:"kanpur",
//     }
// }
// console.log("city" in person)

// hasOwnproperty


// let person={
//     fname:'preeti',
//     last:'diwakar',
//     agr:19,
// }
// console.log(person.hasOwnProperty("fname"));


// let person={
//         fname:'preeti',
//         last:'diwakar',
//         agr:19,
//         address:{
//             city:"kanpur",
//         }
//     }
//     console.log(person.hasOwnProperty("city"));
    

// timing 

// settimeout

// let user=(()=>{
//     console.log("hello");
// },30000);

// let user = (name) =>{
//     console.log(`hello${name}`);
// }
// settimeout(user,1000,"priyanka");


// let user=(fname)=>{
//     console.log(`hello ${fname}`);
// }
// setInterval(user,500,"preeti");


// cleartimeout

// let user=(name)=>{
//     console.log(`hello${name}`);
// }
// clearTimeout(user,5000,"preeti");


// clearInterval

// let user =(name)=>{
//     console.log(`hello${name}`);
// }
// clearInterval(user,500,"Alka");