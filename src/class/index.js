// 첫 번째 문제, 이미 생성된 값에 유지보수가 너무 힘들다.
var person = { name: '홍길동', age: 10 }
var person2 = { name: '홍길자', age: 22 }
var person3 = { name: '홍길순', age: 30 }

// ES5. 버전의 생성자 함수
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.getName = function() {
  return this.name
}

return Person

// 대안. 붕어빵 틀 (class ES6, 생성자 함수 ES5)
// 첫 번째 문제 해결 이미 생성된 값에 유지보수가 용이해졌다.
class Person {
  // Person 이 생성되면서 최초에 한번
  constructor(name, age, address) {
    this.name = name
    this.age = age
    this.address = address
  }

  // 문제 2 해결
  // prototype
  getName() {
    return this.name
  }
}

// 문제2. 같은 함수가 불필요하게 메모리에 중첩된다.

var person1 = new Person('홍길동1', 10) // 붕어빵
var person2 = new Person('홍길동2', 10) // 붕어빵
var person3 = new Person('홍길동3', 10) // 붕어빵

// 문제2 해결: 프로토타입을 이용하자
