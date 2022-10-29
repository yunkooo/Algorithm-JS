function solution(s){
    let answer = true;
    let x=0, y=0;
    let str = s.toLowerCase();
    for(item of str){
        if(item == 'p') x++;
        else if (item == 'y') y++;
    }
    answer = x==y ? true : false
    return answer;
}