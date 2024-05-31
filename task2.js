// 1. Create an array of given size in JavaScript ?


let Exanple=[]
Exanple.length=10;
console.log(Exanple)



let hi=Array(10)
console.log(hi)  
console.log(hi.length)


let arr1=new Array(5)
console.log(arr1.length)    //5 
console.log(arr1);         // (5) [empty × 5]
console.log(typeof arr1)  // object  

let arr2 =Array.from(Array(5)) 
console.log(arr2.length)        //5
console.log(typeof arr2)       // object

let arr3=Array.apply(null,Array(5)).map(function(){})
console.log(arr3.length);       // 5
console.log(typeof arr3);      // object
console.log(arr3)             // [undefined, undefined, undefined, undefined, undefined]


let arr4=[];
for(i=0;i<5;i++){
    arr4.push(undefined)
}
console.log(arr4)       //  [undefined, undefined, undefined, undefined, undefined]
console.log(arr4.length)// 5



// ------ -------------- ------------------- --------------------- ----------



// 2. How to initialize an array in JavaScript ?
  

arr1[0]=1;
arr1[1]=2;
arr1[2]=3;
arr1[3]=4;
arr1[4]=5;
console.log(arr1)


let arr5=["Hi","Hello"]
console.log(typeof arr5) // Object
console.log(arr5)

let arr6=[];  
console.log(arr6)    //  empty array


let arr7=new Array(1,2,3,4,5)
console.log(arr7)



// ------ -------------- ------------------- --------------------- ----------



// 3. Iterate over an array in JavaScript ?

let arr8=[1,"A",3,"B"]
console.log(arr8[0]);
console.log(arr8[1]);
console.log(arr8[2]);


for(let i=0;i<arr8.length;i++){
    console.log(arr8[i])
}
let j=0;
while(j<arr8.length){
console.log(arr8[j])
j++
}

let arr9=arr8.map((value)=>{
    console.log(value)
})


let arr10=arr8.forEach(value => {
   console.log(value) 
});

let arr11=[1,2,3]
let arr12=arr11.filter(value=>{
    value%1==0;
    console.log(value)
})

let arr13=arr11.some(value=>{
    value<arr11.length;
    console.log(value)
})




// ------ -------------- ------------------- --------------------- ----------


// 4. What is the most efficient way to create a zero filled array in JavaScript ?



let arr14=Array(10).fill(0)
console.log(arr14)  // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


let arr15= Array(3).fill().map(()=>
    Array(3).fill(0)
)
console.log(arr15)





// ------ -------------- ------------------- --------------------- ----------


// 5. JavaScript Program to Create an Array with a Specific Length and Pre-filled Values ?


let  arr16=Array(5).fill("hello")
console.log(arr16)

let arr17=Array();
for(let i=0;i<5;i++){
    arr17.push(i)
}
console.log(arr17) 



// ------ -------------- ------------------- --------------------- ----------



// 6. How do I check if an Array includes a value in JavaScript?



let arr18=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let arr20=6;
for(let j=0;j<arr18.length;j++){

    if(arr20==arr18[i]){
        console.log(arr18[i]);
    }
    
}


let arr21 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let element = 2;
if (arr21.indexOf(element) == 1)
    console.log(element + " is present.");
else
    console.log(element + " is not present.");




// 7. JavaScript Program to Access Elements in an Array ?


    let arr22=[1,2,3]
    console.log(arr22[0])
    
    for (let n = 0; n < arr22.length; n++) {
      
        console.log(arr22[n])
    }
    for(value of arr22){
        console.log(value)
    }
    let arr23=arr22.map((value)=>{
       return `it is the values ${value}`;
    })
    console.log(arr23)


    let arr24=arr22.forEach((value)=>{
        console.log(value)
    })

    let [a,,c]=arr22;
    console.log(a,"It is element")
    // 2 is not destructed so kept comma simply..
    console.log(c,"It is element")





//8. JavaScript Program to Determine the Length of an Array.


let arr25=[1,2,3,4]
console.log(`The length of the array is ${arr25.length}`)
for(var m=0;m<arr25.length;m++){

}
console.log(m)
for(values of arr25){

}
console.log(values)


let arr26=Object.keys(arr25).length
console.log(arr26)



//9. Check if an element is present in an array using JavaScript?

let arr27=[10,11,12,13];
let arr28=13;

for(let index=0;index=arr27.length;index++){
  if(arr27[i]==arr28){
    console.log(`The element is founded ${arr28}`)
  }  
  else{
    console.log(`The element is not founded ${arr28}`)
  }
}



if(arr27.includes(arr28)){
    console.log(`The element is founded ${arr28}`)
}
else{
    console.log(`The element is not founded ${arr28}`)
}



if(arr27.indexOf(arr28)){
    console.log(`The element is founded ${arr28}`)
}
else{
    console.log(`The element is not founded ${arr28}`)
}





// 10. JavaScript Program to Swap First and Last Elements in an Array;

let arr29=[1,2,3]
let arr30=arr29[0]
let arr31=arr29[arr29.length-1]
arr29[0]=arr31;
arr29[arr29.length-1]=arr30;
console.log(arr29)
