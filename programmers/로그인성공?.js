function solution(id_pw, db) {
    let id, pw;
        for([id,pw] of db){
            if(id === id_pw[0] && pw === id_pw[1]) return 'login'
            else if (id === id_pw[0] && pw !== id_pw[1]) return 'wrong pw'
            
        }
        return 'fail' 
}