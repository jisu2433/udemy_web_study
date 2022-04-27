# JS Study Note2

## JavaScript 배열

배열 만들기

대괄호 사용 [ ];

```jsx
let fruit = [];
// 배열 안에 string, number, mix 들어감
```

push

- 배열 끝 추가

pop

- 배열 끝 삭제

shift

- 맨 앞 제거

unshift

- 맨 앞 추가

concat

- 배열 합치기

includes

- 배열 안에 있으면 true , 없으면 false 반환

indexOf

- 배열 몇 번에 있는지 알려줌 (없으면 -1, 동일한 값 경우 앞 부분만 나옴)

reverse

- 배열 반대로 뒤집음

slice

- 배열 일부 복사
- 음수 입력하면 배열 끝부터 가져옴

splice

- 배열 부분 추가, 삭제

sort

- 오름차순, 내림차순으로 정렬할 때 사용

배열 비교할 때 같은 참조를 따르는 배열인지 확인해야 한다.

이중 등호, 삼중 등호로 메모리의 참조 확인

const

- 재할당은 불가능하지만 배열 안의 콘텐츠는 변경 가능

다차원 배열

```jsx
예제;
const airplaneSeats = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];

// null 접근해서 값 바꾸기
airplaneSeats[3][1] = "Hugo";
```

## JavaScript 객체 리터럴

Property = key + value

key : value

username : jisu

```jsx
예제;
let product = {
  name: "Gummy Bears",
  inStock: true,
  price: 1.99,
  flavors: ["grape", "apple", "cherry"],
};
```

객체에서 만드는 모든 키는 문자열로 반환 (기호 제외)

변수를 객체에서 키로 사용하고 싶으면 대괄호를 사용

외부 데이터로 객체 만들기
