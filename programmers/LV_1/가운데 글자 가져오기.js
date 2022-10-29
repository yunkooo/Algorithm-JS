function solution(s) {
    var answer = '';
    const len = Math.floor(s.length/2);
    return s.length%2==0 ? s.slice(len-1,len+1) : answer +=s[len];
}