// 서버로부터 받은 결과 값을 가지고 등급을 정해주어야 할 때

const rank = 0 // 0 or 1 or 2 or 3

// if (최대 3개 거의 2개)

if (rank === 0) {
  console.log('일반')
} else if (rank === 1) {
  console.log('일반2')
}

// switch (3개이상)

switch (rank) {
  case 0: {
    console.log('일반')
    return
  }
  case 1: {
    console.log('일반')
    return
  }
  case 2: {
    console.log('일반')
    return
  }
  default: {
    console.log('일반')
  }
}

// 삼항연산자 => let 을 안쓰고 const (2개일 때) 0 or 1

let label = ''

if (rank === 0) {
  label = '일반회원'
} else {
  label = 'VIP'
}

console.log(label) // 뭐고

// let 을 const
const label2 = rank === 0 ? '일반회원' : 'VIP'
console.log(label2)
