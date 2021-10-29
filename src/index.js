import add from './add'
import abc, { addName, foo } from './addName'

import User from './user'

const result = add(10, 20)
const name = addName('홍길동')

console.log(result)
console.log(name)
console.log(foo)
console.log(abc())
console.log(new User().name)
