# JS Type

a 에 값이 할당되기 전에는 타입을 알 수 없다 ...
=> 동적 타이핑 언어

```js
var a = 10 // a number
```

## Type 

원시타입 

- number
- string
- boolean 
- null (선언 조차 되지 않은 상태)
- undefined (선언은 되었지만 값이 할당되지 않은 상태)
- Symbol (ES6)

그 외는 다 Object 타입이다.

```js
typeof 변수 // 변수의 타입을 알아 낼 수 있다.
```

## 왜 타입스크립트가 등장했는가? 

```js
// 두 개의 숫자를 받아서 더해주는 함수
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
}
add(10, 20)

add('짱', '구') // X
```

```js
function add(a: number, b: number): number {}

add('짱') // error
```