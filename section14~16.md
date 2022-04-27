# JS Study Note

## JavaScript 문자열

### 자바스크립트 기본 원시 타입

- Number
- String
- Boolean = true or false
- Null
- Undefined

- Nan(Not A Number)
  - 0 / 0 //Nan
  - 1 + NaN //Nan

**변수**

```js
let year = 2022;
year = 2022;
```

const

- 상수, 항상 일정한 값
- 업데이트, 변경 불가능

var

- 옛날 방식

변수 선언시 **카멜 케이스** 사용

- ex) CamelCase

변수 이름은 정확히 알아볼 수 있도록 **의미 있는 변수 이름 사용**

- ex) UserName ...

**String**

```js
let firstName = “Ziggy”;

let msg = “Please do not feed the chimps!”;

let animal = ‘Dumbo Octopus’;

let bad = “this is wrong”;
```

- **index**가 있다.
- **0**부터 시작

**String Methods**

Method

- 특정 문자열을 사용해 수행할 수 있는 동작
- 두 개의 메서드 한 문장에 사용 가능

```js
greeting.trim().toUpperCase();
```

indexOf

- 문자의 위치 index로 알려줌

slice

- 문자 자르기 (시작, 끝)

replace

- 교체 (교체 전 문자, 교체 후 문자)

**Template Literals**

```
`I counted ${3 + 4} sheep;`
```

- 백틱 사용

null

- 자주 사용 X, 변수에 대해서 값으로 지정하는 요소

undefined

- 자주 사용

**Math**

Math.floor()

- 무조건 내림

Math.ceil()

- 무조건 올림

Math.random()

- 랜덤 숫자 추출 (자연수로 만들어야 함)

```js
const step1 = Math.random();

const step2 = step1 * 10;

const step3 = Math.floor(step2);

const step4 = step3 + 1;

Math.floor(Math.random() * 10) + 1;
```

연산 시 **괄호** 필수!

**비교 연산자**

이중 등호 (==)

- 두 값의 타입이 같도록 전환하고 비교

삼중 등호 (===)

- 타입을 구분하고 값과 타입을 모두 비교

**if statement**

```js
// 짝수일 때 even 띄우기
function isEven(num) {
  if (num % 2 == 0) {
    console.log("even");
  }
}
```

**Else if**

- if 조건 추가 가능

**Else**

- if 조건 마지막에 씀
- 조건이 모두 안 맞을 경우 Else 실행

**if statement example**

```js
function getColor(phrase) {
  if (phrase === "stop") {
    console.log("red");
  } else if (phrase === "slow") {
    console.log("yellow");
  } else if (phrase === "go") {
    console.log("green");
  } else {
    console.log("purple");
  }
}
```

**Truthy and Falsy Values**

- Falsy values
  - false
  - 0
  - ""
  - null
  - undefined
  - NaN
- Everything else is truthy!

**Logical Operators**

- && (and)
  - true && true 만 true!
- || (or)
  - 하나만 true 여도 true!
- ! (not)

**switch**

- case가 if, else if 역할
- but, 일치하는 항목 찾은 후 마지막까지 계속 실행
- break 넣어주면 해결
- default가 else 역할
- 그냥 if를 쓰자.
