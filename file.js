function avers(arr){
    let sum=arr[0];
    let i=1;
    do {
    sum = sum + arr[i];
        i++;
    } while(i < arr.length);
    
    let aver= sum / arr.length;
    return aver;
    };
    avers([2,2]);


function avers(arr){
let sum=arr[0];
for (let i=1; i<arr.length; i++){
sum = sum + arr[i];
}
let aver= sum / arr.length;
return aver;
};
avers([10,90,20,39,8]);

function minarr(arr){
    var min = arr[0];
    for(var i=1; i<arr.length; i++){
      if(arr[i] < min){
        min = arr[i];   
      }
     }
   return min;
   };
   minarr([1,2,3]);

   debugger;
function max(arr){
 var max = arr[0];
 for(var i=1; i<arr.length; i++){
   if(arr[i] > max){
     max = arr[i];   
   }
  }
return max;
}
max ([1,2,3]);