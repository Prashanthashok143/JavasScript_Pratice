// 1.  How to Get Character of Specific Position using JavaScript ?
let Str1="Prashanth_Shanigarapu";
let Str2=Str1.charAt(8);
let Str3=Str1.substr(8,1)
let Str4=Str1.slice(8,9)
console.log(Str2)
console.log(Str3)
console.log(Str4)
console.log(Str1[8])



// 2. How to replace multiple spaces with single space in JavaScript ?
 

let Str5 = "   Welcome    to  MyHome    for   Festival   ";
let Str6=Str5.replace(/\s+/g, ' ').trim()   // Find the match of any string that contains at least one m.
let str7=Str5.split(/\s+/g).join(" ").trim();  
console.log(Str6)
console.log(str7)


// 3.  How to replace all occurrences of a string in JavaScript ?


let Str8 ='Welcome MyHome, Welcome House';
let Str9=Str8.replaceAll("Welcome","Come")
let Str10=Str8.replace(/Welcome/gi,"Hello")
let Str11=Str8.split(" ");
let Str12=Str8.split("Welcome").join("Hello")
let StringSearch="Welcome";
let StringReplace="Hello";
let regEx=new RegExp(StringSearch,"g")
let Str13=Str8.replace(regEx,StringReplace)

console.log(Str9)
console.log(Str10)

for(i=0;i<=Str11.length;i++){
    if(Str11[i]=="Welcome"){
        Str11[i]="Hello"
    }
}
console.log(Str11.join(" "))
console.log(Str12)
console.log(Str13)


// 4. How are strings stored in JavaScript ?

/*  JavaScript stores all the values inside the string
 constant pool on direct allocation. */


let Str14="Prashanth";
let Str15="Shanigarapu";
let Str16="Prashanth";
console.log(Str14==Str15) // false
console.log(Str14=Str16) // true

/*
Here,Str14 and Str16 point at the same location in the memory
 while a new space is created for Str15 as it has a different
  value. In this way string constant pool saves memory 
  by making the same value string point to the same 
  location in the memory. 
*/


/* There are some cases where we want a distinct String 
object to be created even though it has the same value. 
In this case, we use the new keyword. */

let Str17=new String("Prashanth");
let Str18=new String("Prashanth");
let Str19=new String("Shanigarapu");
console.log(Str17==Str18) // false;
console.log(Str17==Str19) // true ; 

/* when strings are created using the new keyword,
 a new instance is always created in the heap memory 
 then the value is stored in the String Constant Pool 
 because of this even if the data stored is the same
  still the strings will not be equal.   
*/







// 5. What is the correct way to check for string equality in JavaScript ?


let Str20="Prashanth"
let Str21=new String("Prashanth")
let Str22="123";
let Str23=Str20.localeCompare(Str22)
let Str24=Str20.match(Str22)
console.log(Str20==Str21) // true Bcuz,it checks only the value.
console.log(Str20===Str21) // false Bcuz,its check type of
console.log(Str23) // 0 ..  Str20 and Str22 are equivalent which gives value of zero(0).
console.log(Str24) // null .. values are not equal.



// Examples of Local String..


let Str25="cde";
let Str26="abc";
let Str27="cde";
let Str28="cdef";
let Str29=Str25.localeCompare(Str26)
let Str30=Str25.localeCompare(Str27)
let Str31=Str25.localeCompare(Str28)

 // Alphabetically the words "cde" comes after
// "abc" which gives a positive value ( 1 )
console.log(Str29)

// "cde" and "cde" are equivalent which
// gives a value of zero(0)

console.log(Str30)

// An alphabet "cde" comes before "cdef" which
// gives a negative value or Values are not eqvalient.
console.log(Str31)



// 6.How to convert a string into a integer without using parseInt() function in JavaScript ?


let Str32=" 100 ";
let Str34=Str32-1;
let Str35=+Str32;
let Str36=Math.floor(Str32) // Here ,use any Math.Methods.
let Str33=Number(Str32)
console.log(typeof Str33)
console.log(typeof Str34)
console.log(typeof Str35)
console.log(typeof Str36)



// 7. How to generate all combinations of a string in JavaScript ?


let Str37="Prashu";
let Temp=[];
let Result=[];
for(i=0;i<Str37.length;i++){
   Temp=[Str37[i]];
   let j=0;
   while(Result[j]){
    Temp.push(""+Result[j]+Str37[i])
    j++
   }
   Result=Result.concat(Temp)
}
// console.log(Result,Result.length)

// debugger; 
let Str38="Man";
let Combine=[];
for(let x=0;x<Str38.length;x++)
{
    for(y=x+1;y<=Str38.length;y++){
     Combine.push(Str38.slice(x,y))   
    }
}
console.log(Combine);





// 8.How to find unique characters of a string in JavaScript ?


let Str39="Prashanth";
let Str40="";
let Str41=Str39.split("");
let Str42=new Set(Str41)
let Str43=Array.from(Str42) // converts the SetObject into Array.
let Str44=Str43.join("")
for(i=0;i<Str39.length;i++)
{
    if(Str40.includes(Str39[i])== 0){
        Str40+=Str39[i]
    }
}
console.log(Str40);
console.log(Str44);




// 9. How to create an element from a string in JavaScript ?



let Str45="h1";
let Str46="h2";

let element1=document.createElement(Str45);
let element2=document.createElement(Str46);
element1.innerText="Praticing"
element2.innerText="String Methods";
document.body.appendChild(element1);
document.body.appendChild(element2);


let Str47=document.getElementById("div");
Str47.innerHTML="<h3>Hello EveryOne</h3>";


// 10. How to get the first three characters of a string using JavaScript ?


let Str48="Prashanth";
let Str49=Str48.slice(0,3)
let Str50=Str48.substr(0,3)
let Str52=Str48.substring(0,3)
console.log(Str50)
console.log(Str49)
console.log(Str52)
let Str51="";
for(i=0;i<3;i++){
   Str51+=Str48[i]
}
console.log(Str51)


// 11. How to check a given string is an anagram of another string in JavaScript ?






