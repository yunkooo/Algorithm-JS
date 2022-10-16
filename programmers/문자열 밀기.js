function solution(A, B) {
    var answer = 0;
    const n = A.length
    let arr = new Array(n)
    
    for (let i=0; i<n; i++){
       for(let j=0; j<n; j++){
          if((j+i) <= n-1){
              arr[i+j] = A[j]
          }else if((i+j)>n-1) {
            arr[i+j-n] = A[j]
          }
       }
        let result = arr.join('')
        console.log(result)
        if(result === B) return i 

    }
    return -1
}