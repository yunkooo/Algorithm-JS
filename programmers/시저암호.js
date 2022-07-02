function solution(s, n) {
    var answer = s.split('').map(a =>  {
        if(a == " ") return " ";  
        let val = a.charCodeAt(0);
        if(65<= val && val <=90){
            if(val+n >90){
                val = val+n-26;
                return String.fromCharCode(val);
            }else{
                return String.fromCharCode(val+n);
            }
        }else if (97 <= val && val <= 122){
            if(val+n > 122){
                val = val+n-26;
                return String.fromCharCode(val);
            }else{
                return String.fromCharCode(val+n);
            }
        }
    }).join('');
    return answer;
}