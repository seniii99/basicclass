// 필요한 모듈을 불러옵니다.
import readlineSync from "readline-sync";

// 프로그램 시작
function main() {
  while (true) {
    console.log("\n=== 선택 메뉴 ===");
    console.log("1. 사칙연산 계산기");
    console.log("2. 구구단 출력");
    console.log("0. 종료");
    const choice = readlineSync.question("메뉴를 선택하세요: ");

    switch (choice) {
      case "1":
        calculator();
        break;
      case "2":
        printMultiplicationTable();
        break;
      case "0":
        console.log("프로그램을 종료합니다.");
        return;
      default:
        console.log("잘못된 입력입니다. 다시 시도하세요.");
    }
  }
}

// 사칙연산 계산기 함수
function calculator() {
  const num1 = Number(readlineSync.question("첫 번째 숫자를 입력하세요: "));
  const operator = readlineSync.question("연산자를 입력하세요 (+, -, *, /): ");
  const num2 = Number(readlineSync.question("두 번째 숫자를 입력하세요: "));

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("잘못된 연산자입니다.");
      return;
  }
  console.log(`결과: ${result}`);
}

// 구구단 출력 함수
function printMultiplicationTable() {
  const userChoice = readlineSync.question(
    "1~9 사이의 숫자를 입력하면 해당 단을 출력합니다. "
  );

  if (userChoice === "") {
    // 선택한 구구단 출력
    const num = parseInt(userChoice, 10);
    
    if (num >= 1 && num <= 9) {
      console.log(`\n--- ${num}단 ---`);
      for (let i = 1; i <= 9; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
      }
    } else {
      console.log("1~9 사이의 숫자를 입력하세요.");
    }
  }
}
// 프로그램 실행
main();
