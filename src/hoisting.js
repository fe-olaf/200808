// 1. 함수 호이스팅
// => 함수를 상단으로 끌어올린다.

add() // ??

function add() {
  console.log('add')
}

// => 실행 당시
// => 함수 호이스팅은 함수 자체를 끌어올린다.
// function add() {
//     console.log('add')
//   }

// add() // add

// 2. 변수 호이스팅

console.log('add2', add2)

var add2 = function () {
  console.log('add2')
}

// => 실행 당시
// => 변수의 선언부를 최상단으로 끌어올린다.
// var add2

// add2() // undefined

// add2 = function () {
//   console.log('add2')
// }

// 3. let, const 의 변수 호이스팅

console.log(add3) // TDZ

let add3 = function () {}

// TDZ 박스 (규칙: 값이 할당되지않은 상태의 값은 접근 X)
// console.log(add3) => var 의 경우는 호이스팅이 일어나면서 undefined 로 할당된다.
// => let, const 는 var 다르게 값이 할당되지 않은 경우 TDZ 로 들어간다.
// let add3 = function () {}
