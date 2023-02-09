function solution(rsp) {
  var answer = rsp.split("").map((val) => {
    if (val === "2") return "0";
    else if (val === "0") return "5";
    else if (val === "5") return "2";
  });
  return answer.join("");
}
