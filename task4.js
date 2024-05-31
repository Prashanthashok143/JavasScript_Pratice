// 1. create a function takes two numbers as args and returns their sum

//----     1. Named Function     -----



function Sum(a,b){
    return `Sum of a+b is ${a+b}`
}
console.log(Sum(2,3))



// 2.write a function that takes an integer minutes and converts into seconds

//----     2. Anonymous  Function     ----- or function expression.



let Seconds=function(Min){
    return `${Min} is Converted into ${Min*60} Seconds`
} 
console.log(Seconds(3))


// 3.create a function that takes the arg in years and retirns the age in days.

//----     3. Arrow  Function     -----

const Days=(b)=>{
    return` ${b*365} days`
}
console.log(Days(3))




// 4.create a function that take number as an arg ,increment the number by 1 and return thier result
  
//----     4. IIFE  Function     ----- Immediately invoked function expression.


// (function(Age){
//     console.log(`${Age} is Converted into ${Age * 365} Days`)
//    })(1) 

// it showing type error.



// 5. create a function that takes voltage and current and return calcualted power.


function Power(voltage,current){
return `calculated power from ${voltage} and ${current} is ${voltage*current} `
}
console.log(Power(230,12));



// 6.write a function that returns a string "something joined with space " " and the guven arg a.

const String=function(a){
    return "Something"+a;
}
console.log(String(" is terrible"));



// 7. create a fun that take 2 parms,both args are int a and b, return true if one of them is 10 or if their sum is 10.


const Ten=(a,b)=>{
    return a===10 || b===10 || a+b===10;
}
console.log(Ten(6,4))



//8.create a function that takes two strings as args and returns either 1 or 0 depending on whether the total no of characters in the 1st string equal to 2nd string.

// (function(a, b){
//     if(a.length===b.length){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// })("hi","hel");


// type error


//9.create  a function that takes a name and returns a greeting in the form of string.use an arrow function


const Greeting=(name)=>{
return `Hello,${name}`
}
console.log(Greeting("Prashanth"))


//10. sorrt an asceding array withouth using in built methods


var arr=[2,4,1,3]
for(var i=0;i<arr.length;i++){
   for(let j=i+1;j<arr.length;j++){
    if(arr[i]>arr[j]){
        let temp=arr[i];
        arr[i]=arr[j]
        arr[j]=temp;
    }
   }
}
console.log(arr)
