;(() => {
  'use strict'
  console.log(30),
    console.log('hello홍길동'),
    console.log('FOO'),
    console.log(void 0),
    console.log(
      new (function o(n) {
        !(function (o, n) {
          if (!(o instanceof n))
            throw new TypeError('Cannot call a class as a function')
        })(this, o),
          (this.name = n)
      })().name,
    )
})()
