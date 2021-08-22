// And (&&), OR (||)
// And => 모두가 참이여야한다.
// OR => 하나라도 참이라면 참.

const b1 = true // 고정 true
const b2 = true // 고정 true
const b3 = true // true ? false

// AND
if (b1 && b2 && b3) {
  console.log('모두 참 !')
}
if (b3 && b1 && b2) {
  console.log('실패할 수 있는 조건을 앞에다 두는것이 좋다')
}
// OR
if (b1 || b3 || b2) {
  console.log('하나라도 참 !')
}

// Falsy
// 0, null, undefined, '' => 조건문으로 들어갔을때 false 판단
const result = 0 // 연산후에 결과값이 0, 100

if (!result) {
  console.log('실패했습니다!..')
}

const message = ''

// false => true
if (!message) {
  console.log('실패했습니다!..')
}

// ==, ===
console.log('5' == 5) // false
