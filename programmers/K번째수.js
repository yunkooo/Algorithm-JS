function solution(array, commands) {
    var answer = [];
    var arr = [];
    for (let i=0; i<commands.length; i++){
        for(let j=commands[i][0]-1; j<commands[i][1]; j++){
            arr.push(array[j]);
        }
        arr.sort(function(a,b){
            return a-b
        })
        console.log(arr);
        arr[commands[i][2]]
        answer.push(arr[commands[i][2]-1])
        arr =[];
    }
    
    return answer;
}