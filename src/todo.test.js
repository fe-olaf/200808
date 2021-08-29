const FILTER_TYPES = ['ALL', 'ACTIVE', 'COMPLETED']

const todos1 = {
  id: 1,
  memo: '자바스크립트',
  endFl: true,
}

const todos2 = {
  id: 2,
  memo: 'PHP',
  endFl: false,
}

const todos3 = {
  id: 3,
  memo: 'HTML',
  endFl: true,
}

const todos4 = {
  id: 4,
  memo: 'CSS',
  endFl: true,
}

const todosTest1 = []
const todoTest2 = [todos1]
const todoTest3 = [todos1, todos2]
const todoTest4 = [todos1, todos2, todos3, todos4]

/**
 * 전체는 4개
 * active 3개
 * completed 1개
 */

/**
 * filterTodo('ACTIVE', todoTest4) => [투두]
 */
function empty(arr) {
  return arr.length === 0
}

function filterTodo(type, todos) {
  if (!Array.isArray(todos) || empty(todos)) {
    throw new Error('todos 배열이 비었습니다.')
  }

  switch (type) {
    case FILTER_TYPES[0]: {
      return todos
    }
    case FILTER_TYPES[1]: {
      return todos.filter((todo) => todo.endFl)
    }
    case FILTER_TYPES[2]: {
      return todos.filter((todo) => !todo.endFl)
    }
    default: {
      return todos
    }
  }
}

describe('TODO 테스트', () => {
  it('추가 - 하나의 TODO를 추가하면 todos 배열의 length는 1이된다', () => {
    const todos1 = {
      id: 1,
      memo: '자바스크립트',
      endFl: true,
    }

    const newTodos = [...todosTest1, todos1]

    expect(todosTest1.length).toBe(0)
    expect(newTodos.length).toBe(1)
  })
  it('삭제 - 하나의 TODO를 삭제하면 todos 배열의 length는 0이된다(값이 1나 추가된상태에서)', () => {
    const removeTodo = todoTest2.filter((todos1) => {
      return todos1.memo !== '자바스크립트'
    })

    expect(todoTest2.length).toBe(1)
    expect(removeTodo.length).toBe(0)
  })
  it('수정 - 완료상태가 false 값을 업데이트하면 true가 된다', () => {
    const updateTodo = todoTest3.map((todos2) => {
      return todos2.id === 2 ? { ...todos2, endFl: true } : todos2
    })
    expect(updateTodo[1].endFl).toBe(true)
  })
  it('필터링 - 완료상태인 todos의 length는 3개 일 것이다(완료3개 미완료1개값 추가한상태)', () => {
    const statusTodo = todoTest4.filter((todos2) => {
      return todos2.endFl
    })
    expect(statusTodo.length).toBe(3)
  })

  it('필터링', () => {
    expect(filterTodo(FILTER_TYPES[0], todoTest4).length).toBe(4)
    expect(filterTodo(FILTER_TYPES[1], todoTest4).length).toBe(3)
    expect(filterTodo(FILTER_TYPES[2], todoTest4).length).toBe(1)

    // expect(filterTodo(FILTER_TYPES[2])).toThrowError('todos 배열이 비었습니다.')
  })
})
