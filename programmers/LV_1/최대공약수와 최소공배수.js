function solution(n, m) {
    var answer = [];
    let lcd=0;
    if(n>m){
        let gcd = (n,m) => n%m===0 ?  m :  gcd(m, n%m);
        answer.push(gcd(n,m));
        lcd = (n*m)/gcd(n,m);
        answer.push(lcd);
        
        
    } 
    else{
        let _gcd = (m,n) => m%n === 0 ?  n :  _gcd(n, m%n);
        answer.push(_gcd(m,n));
        lcd = (n*m)/_gcd(m,n);
        answer.push(lcd);
        
        
    } 
    
    return answer;
}