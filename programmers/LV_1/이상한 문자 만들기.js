function solution(s) {
    var answer = '';
    answer= s.split(' ').map(a => a.split('').map((a,idx)=>{
        if(idx == 0 || idx%2 ==0){
            return a.toUpperCase();
        }else {
            return a.toLowerCase();
        }
    }).join('')).join(" ");
    return answer;
}