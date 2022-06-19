
function solution(participant, completion) {
    var answer = '';
    participant = participant.sort();
    completion = completion.sort();
    for (var i = 0; i < participant.length; i++ ){
        if (participant[i] !== completion[i]){
            answer = participant[i];
            return answer;
            
        }
    }
}
/*
 sort()를 통하여 오름차수로 변경 후
 for문을 한번 돌린다.
 비교 중 일치하지않으면 바로 return
 for 문 외부에 return을 작성 시 참여자 마지막 이름이 출력됨
 */