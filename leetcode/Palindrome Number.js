let isPalindrome = function(x) {
    let k = x.toString().split('').reverse().join('');
     if(x == k){
         return true;
     }else{
         return false;
     }
     
 };