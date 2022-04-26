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
