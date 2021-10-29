class Todo {
  constructor(id, memo, isDone) {
    this.id = id
    this.memo = memo
    this.isDone = isDone
  }
}

/**
 * TODO
 * => Todo 를 관리한다.
 *
 * 기능: 추가, 삭제
 */
class Todos {
  constructor() {
    this.todos = [] // state
  }

  addTodo(memo) {
    this.todos = [...this.todos, new Todo(Date.now(), memo, false)]
  }

  // filter => true 값만 리턴한다. input output 사이즈가 달라 질 수 있다.
  // map => 원본배열로 새로운배열을 만들 때 사용하는 함수. input output 사이즈가 똑같다.
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => {
      return todo.id !== id
    })
  }

  // 완료된 todo만 리턴한다.
  getCompletedTodos() {
    return this.todos.filter((todo) => {
      return todo.isDone
    })
  }

  modifyTodo(id) {
    // id 를 받아서, id 를 가진 todo에 접근하여 isDone 을 판단해서 토글한다.
    this.todos.map((todo) => {
      if (todo.id !== id) {
        return todo
      }

      return { ...todo, isDone: !todo.isDone }
    })
  }

  // type = COMPLETED / ACTIVE / ALL
  filter(type) {
    switch (type) {
      case 'COMPLETED': {
        return this.todos.filter((todo) => {
          return todo.isDone
        })
      }
      case 'ACTIVE': {
        return this.todos.filter((todo) => {
          return !todo.isDone // false
        })
      }
      case 'ALL': {
        return this.todos
      }
      default: {
        return this.todos
      }
    }
  }

  size() {
    return this.todos.length
  }
}

describe('TODO 테스트', () => {
  it('추가 - 하나의 TODO를 추가하면 todos 배열의 length는 1이된다', () => {
    const todoManager = new Todos()

    todoManager.addTodo('새로운 아이템')

    expect(todoManager.size()).toBe(1)
  })
  it('삭제 - 하나의 TODO를 삭제하면 todos 배열의 length는 0이된다(값이 1나 추가된상태에서)', () => {
    const todoManager = new Todos()

    todoManager.addTodo('새로운 아이템')

    todoManager.removeTodo(todoManager.todos[0].id)

    expect(todoManager.size()).toBe(0)
  })
  it('수정 - 완료상태가 false 값을 업데이트하면 true가 된다', () => {})
  it('필터링 - 완료상태인 todos의 length는 3개 일 것이다 (완료3개 미완료1개값 추가한상태)', () => {})
  it('필터링', () => {
    const todoManager = new Todos()

    todoManager.filter('COMPLETED') // 완료된 애들만
    todoManager.filter('ACTIVE') // 완료 안된 애들만
    todoManager.filter('ALL') // 전체

    expect(todoManager.getCompletedTodos().length).toBe(0)
  })
})
