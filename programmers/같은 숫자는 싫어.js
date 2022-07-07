function solution(arr)
{
    var answer = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] == arr[i+1]) {
         arr.splice(i,1);   
         i--; 
        }
    }
    return arr;
}

// 효용성 실패!!


function solution(arr)
{
    var answer = [];
    answer = arr.filter((a,idx) => a !== arr[idx+1])
    
    return answer;
}