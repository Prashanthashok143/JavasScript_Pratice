
// 10. JavaScript Program to Swap First and Last Elements in an Array;

let arr29=[1,2,3,4,5,6,7,8,9]
let arr30=arr29[0]
arr29[0]=arr29[arr29.length-1];
arr29[arr29.length-1]=arr30;
console.log(arr29);



let arr31=[10,11,12,13,14,15,16,17];
[arr31[0],arr31[arr31.length-1]] = [arr31[arr31.length-1],arr31[0]]
console.log(arr31)




let arr32=[18,19,20,21,22];
arr33=arr32.splice(arr32.length-1,1,arr32[0]);
;console.log(arr32)
