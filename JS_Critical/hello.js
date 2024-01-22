const {add,sub}=require('./math');
// console.log(math);// module.exports='vicky_Acharjee'; Returns  "vicky_Acharjee"
//Main motive is simply that, whatever we wrote inside "..." code it simply gets reflected here 

// console.log(math);// [Function: add] since we didnt provided any argument in the parameter

//now we will see in includig the parameter
// console.log(math(2,3));
// console.log(math(10,10));


// console.log(math.add(1,2)); //with the help of . operator we cant digged in
// console.log(math.sub(1,2)); //for substraction


//using the de-structure method
// console.log(math.addFn(1,2));
// console.log(math.subFn(1,2));

//initilaly it will throw an eroor since bcoz of the name had been de-structured

// { addFn: [Function: add], subFn: [Function: sub] }// the se-structured one

//we will see an output using anonymous function
// console.log(math.mul(2,3));//throws an putput as ::6




//This works //const {add,sub}=require('./math');>>> by destructuring
console.log(add(2,1));
console.log(sub(2,1));
