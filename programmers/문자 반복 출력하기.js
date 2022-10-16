function solution(my_string, n) {

    return my_string.split('').map(val => val.repeat(n)).join('');
        
        
    }