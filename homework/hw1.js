// [데이터 타입 연습 문제]

// 문제 1: 자신의 이름과 나이를 변수에 저장하고 출력하세요.
let name = "seheun"
let age = 26;
console.log(name, age);
// 문제 2: 불리언 값을 저장하는 변수를 만들고 출력하세요.
let isStudent = true;
console.log(isStudent);
// 문제 3: null과 undefined의 차이를 콘솔로 확인하세요.
// 힌트:
// var undefinedVar;
// var nullVar = null;
// 두 변수를 console.log로 출력하고, typeof 연산자를 사용하여 타입을 확인해보세요.
console.log(undefinedVar);
console.log(typeof undefinedVar);
console.log(nullVar);
console.log(typeof nullVar);
// 문제 4: 좋아하는 음식 3가지를 배열에 저장하고 첫 번째 음식을 출력하세요.
let foods = {"피자", "햄버거", "치킨"};
console.log(foods[0]);
// 문제 5: 사람의 정보를 객체로 만들어 이름과 나이를 저장하고 출력하세요.
const person = {
    name = "Tom",
    age = 26
};
console.log(person.name, person.age);

// [조건문 연습 문제]

// 문제 1: 숫자를 입력받아 짝수인지 홀수인지 출력하세요.
if (num % 2 ===0) {
    console.log("짝수");
} else {
    console.log("홀수");
}
// 문제 2: 점수를 입력받아 학점을 출력하세요.
// 90점 이상 A, 80점 이상 B, 70점 이상 C, 그 외 D
let grade;
let score = 85;

switch (true) {
    case (score >= 90):
        grade = "A";
        break;
    case (score >= 80):
        grade = "B";
        break;
    case (score >= 70):
        grade = "C";
        break;
    default:
        grade = "D";
}
console.log(grade);
// 문제 3: 나이를 입력받아 성인인지 미성년자인지 출력하세요.
let age = 26;
if (age >= 20) {
    console.log("성인입니다.");
} else {
    console.log("성인이 아닙니다.")
}
// 문제 4: switch문을 사용하여 요일을 출력하세요.
switch (day) {
    case 0:
        console.log("월요일");
        break;
        case 1:
        console.log("화요일");
        break;
        case 2:
        console.log("수요일");
        break;
        case 3:
        console.log("목요일");
        break;
        case 4:
        console.log("금요일");
        break;
        case 5:
        console.log("토요일");
        break;
        case 6:
        console.log("일요일");
        break;
        default:
            console.log("오류");
}
// 문제 5: 두 숫자를 비교하여 큰 수를 출력하세요.
let num1 = 1;
let num2 = 2;
console.log(Math.max(num1, num2));
console.log(Math.min(num1, num2));

// [반복문 연습 문제]

// 문제 1: 1부터 10까지의 숫자를 출력하세요.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// 문제 2: 1부터 10까지의 합을 계산하여 출력하세요.
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);
// 문제 3: 구구단 3단을 출력하세요.
for (let i = 1; i <= 10; i++) {
    console.log(`3 x ${i}은 ${3 * i}`);
}
// 문제 4: 배열에 저장된 과일들을 하나씩 출력하세요.
// var fruits = ['사과', '바나나', '포도'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// 문제 5: while문을 사용하여 5부터 1까지 역순으로 출력하세요.
let i = 5;
while (i >= 1) {
    console.log(i);
    i--;
}

// [함수 연습 문제]

// 문제 1: 두 숫자를 더하는 함수를 작성하고 결과를 출력하세요.
function add(a, b) {
    return a + b;
}
// 문제 2: 이름을 매개변수로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수를 작성하세요.
function hello(name) {
    console.log(`안녕하세요, ${name}님!`);
}
// 문제 3: 세 개의 숫자 중 가장 큰 수를 반환하는 함수를 작성하세요.
function findNum(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
// 문제 4: 숫자를 매개변수로 받아 짝수인지 홀수인지 반환하는 함수를 작성하세요.
function checkNum(number) {
    if (number % 2 === 0) {
        return "짝수";
    } else {
        return "홀수";
    }
}
// 문제 5: 배열을 매개변수로 받아 모든 요소를 출력하는 함수를 작성하세요.
function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
}
}
