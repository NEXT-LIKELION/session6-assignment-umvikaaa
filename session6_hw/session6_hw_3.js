const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];

const result = numbers
    .filter((num) => num % 2 === 0) // 짝수
    .map((num) => num * num) // 제곱
    .reduce((acc, cur) => acc + cur, 0); // 합계

console.log(result);
