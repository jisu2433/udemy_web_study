# JS Study Note3

## For

**기본 구조**

```jsx
for(let num 1; num <= 10; num++){
	console.log(num);
}
// 1부터 10까지 숫자 증가하면서 반복
```

```jsx
// Print out "Da ba dee da ba daa" 6 times, using a for loop
let lyrics = "Da ba dee da ba daa";
for (let num = 1; num <= 6; num++) {
  console.log(lyrics);
}
```

```jsx
// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0
for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}
```

```jsx
for (let i = 0; i <= people.length - 1; i++) {
  console.log(people[i].toUpperCase());
}
//SCOOBY
//VELMA
//DAPHNE
//SHAGGY
//FRED
```

```jsx
중첩 배열
const seatingChart = [
	['keristen', 'Erik', 'Jack'],
	['jisu', 'janny', 'hoin'],
	['mina', 'dain', 'soni']
]

for (let i = 0; i < seatingChart.lenght; i++) {
	const row = seatingChart[i];
	console.log(`ROW #${i + 1}`)
	for (let j = 0; j < row.lenght; j++) {
		console.log(row[j])
	}
}

//i는 배열 개수를 나타냄 [],[],[] 세 개
//row의 0은 ['keristen', 'Erik', 'Jack']을 나타냄
//j는 row의 각각의 이름
```

## While

**기본 구조**

```jsx
let num = 0;
while (num < 10) {
  console.log(num);
  num++;
}
```

## For of

```js
for (variable of iterable) {
  statement;
}
// 제곱 구하기
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of numbers) {
  console.log(i * i);
}
// 1, 4, 9, 16, 25 ,36, 49, 64, 81
```
