/*문제 설명
정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ num_list의 길이 ≤ 10
1 ≤ num_list의 원소 ≤ 9
num_list에는 적어도 한 개씩의 짝수와 홀수가 있습니다.

입출력 예
num_list	result
[3, 4, 5, 2, 1]	393
[5, 7, 8, 3]	581

입출력 예 설명
입출력 예 #1
홀수만 이어 붙인 수는 351이고 짝수만 이어 붙인 수는 42입니다. 두 수의 합은 393입니다.
입출력 예 #2
홀수만 이어 붙인 수는 573이고 짝수만 이어 붙인 수는 8입니다. 두 수의 합은 581입니다.*/

//내 풀이
//forEach, if문
function solution(num_list) {
    let even = ''
    let odd = ''
    num_list.forEach(item => {
        if(item%2===0){
            even += item  
        }else{
            odd += item
        }
    })
    return parseInt(even) + parseInt(odd);
}

//참고할만한 풀이1 (메소드 체이닝, 전개연산자, map, join)
//반환값을 모아 새로운 배열을 반환하는 map을 이용해 홀수, 짝수를 각각 찾아줌. join을 통해 문자로 반환된 값을 number를 통해 숫자로.
function solution(num_list) {
    const odd = num_list.map(x => x%2 === 1 ? x : "").join("")
    const even = num_list.map(x => x%2 === 0 ? x : "").join("")
    return Number(odd)+Number(even);
}

//참고할만한 풀이2 (filter, reduce)
//홀수짝수를 참인 값만 뽑아 새로운 배열로 반환하는 filter를 이용해서 찾음. reduce를 이용해 문자열을 만들어줌.
function solution(num_list) {
    var even = num_list.filter(n => n % 2 === 0).reduce((acc, cur) => acc+cur, '');
    var odd = num_list.filter(n => n % 2 === 1).reduce((acc, cur) => acc+cur, '');
    return Number(even) + Number(odd);
}
