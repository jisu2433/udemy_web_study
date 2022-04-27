# JS Study Note4

## 함수

```js
function heart() {
  console.log("love");
}
heart();
```

```js
function greet(매개변수) {
  console.log(`Hey there, ${매개변수}!`);
}
```

인수 여러 개 문제

```js
function isSnakeEyes(num1, num2) {
  if (num1 === 1 && num2 === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}
//1,1 일때 Snake Eyes! 출력
```

### Return

- 하나의 값만 구함
- 함수 실행을 중단

return 문제

```javaScript
1.
function multiply(num1, num2){
    return num1 * num2
}

2.
function isShortsWeather(temperature){
    if(temperature >= 75){
        return true;
    } else {
        return false;
    }
}
```

## 함수 레벨업

**함수 범위**

```jsx
//(가능)
function collectMoney() {
  let totalMoney = 50000;
  console.log(totalMoney);
}
//(불가능)
function collectMoney() {
  let totalMoney = 50000;
}
console.log(totalMoney);

//함수 안에서만 사용가능
```

같은 이름으로 정의된 변수가 있을 경우, 그 변수를 먼저 참조

**블록** `{}`

```jsx
let radius = 8;

if (radius > 0) {
  const PI = 3.14;
  let circ = 2 * PI * radius;
}
// PI 블록 안에서만 살아있음
console.log(radius); // 8
console.log(PI); // Not defined
console.log(circ); //Not defined
```

**렉시컬 범위**

```jsx
function outer() {
  let hero = "Black Panther";
  function inner() {
    let cryForHelp = `${hero}, please save me!`;
    console.log(cryForHelp);
  }
  inner();
}
```

**함수표현식**

```jsx
const square = function (num) {
  return Math.pow(num, 2);
};
//Math.pow() : 제곱 구해주는 함수
```

**메서드 만들기**

```jsx
const square = {
  area(side) {
    return side * side;
  },
  perimeter(side) {
    return side * 4;
  },
};
//square.area(10) 100
//square.perimeter(10) 40
```

**this 사용해 객체 접근하기**

```jsx
const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount += 1;
    return "EGG";
  },
};
```

**try,catch**

- 에러 발생했을 때 코드를 실행시키고 오류를 처리할 수 있음\*\*

## forEach

```jsx
const fruits = ["banana", "apple", "strawberry"];

fruit.forEach(function (el) {
  console.log(el);
});

//하지만 for of가 더 간결함
for (let el of fruits) {
  console.log(el);
}
//banana
//apple
//strawberry
```

## map

```jsx
const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

const firstNames = fullNames.map(function (name) {
  return name.first;
});
```

## 화살표함수

```js
const greet = (name) => {
  return `Hey ${name}!`;
};
```

**암시적 반환**

```js
const rollDie = () => Math.floor(Math.random() * 6) + 1;
//{}쓰면 안된다.
```

**setTimeout**

```js
setTimeout(() => {
  console.log("hiiiii");
}, 3000);
```

**filter**

- 원본 배열 안바꿈

```js
function validUserNames(usernames) {
  let filteredUsernames = usernames.filter(function (username) {
    return username.length < 10;
  });
  return filteredUsernames;
}
```

**some, every**

- true, false 반환

**화살표 함수와 this**

```js
const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
};
```

**화살표 함수 안에 있는 this는 함수가 만든 범위에 상속되는 this와 값이 같음.**
