   


//.........For Import.........
//for import in the same file we use the method as  [.require] 
//const math=require('./math'); //mandatorily we need to store in an variable
// here ./ path >> indicates the current path of the file
// we can even use the way of de-structure usng {} const {add,sub}=require('./math');
// but while de-structuring we need to understand that de-structure method  name should be same as the function name ...in any case if not then it will throw an error


//........For Export..........
// export can be done in 2 way
//1. module.exports= >>>used only once in file mandatroily
//2. exports.[function_name]= >>> it is used within anonymous function and can be used multiple times
//i modle.exports, if we want to include then we can used as an object like:
    // //module.exports={
    //     a,
    //     b,
    //     c
    // }
    // and if w want to de-struct it then it can be done as:
    // //module.exports={
    //     add:addition,
    //     sub:substraction
    // }
   
   
   
    
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   function add(n1,n2) {
        return n1+n2;
    }
    function sub(n1,n2) {
        return n1-n2;
    }
    // module.exports='vicky_Acharjee';

    // module.exports=add;
    //module.exports=add; >>> in a single file we cant have multiple module.exprots and smae goes for import too
    // >>> So here, the replacement is by using the object

    module.exports={
        add,
        sub
    }

    //now we will the same thing using object object destructure

    // module.exports={
    //     addFn:add,
    //     subFn:sub
    // }


    // we can also multiple exoprts in one file i.e using exports.[function name]=[anonymous function]
    //lets see it

    // exports.mul=(n1,n2)=>n1*n2;