const list = document.querySelector('#list')

list.addEventListener('click', (e) => {
  console.log(e.target.innerText)
})

const btn = document.querySelector('#btn_add')

btn.addEventListener('click', () => {
  const li = document.createElement('li')
  li.appendChild(document.createTextNode('append item'))
  list.appendChild(li)
})
