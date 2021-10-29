/**
 * 1. State = []
 *
 * 라이프 사이클
 * => 컴포넌트의 상태 변화를 감지 할 수 있는 함수
 * => 최초 그려진후, 상태값이 변했을때, 컴포넌트가 사라질때 등
 */

class GymManagerComponent {
  constructor() {
    this.state = {
      trainers: [], // 트레이너의 정보를 가진 배열
    }

    this.componentDidMount()
  }

  bindEvent() {
    const _nameInput = document.getElementById('name')
    const _levelInput = document.getElementById('level')

    document.getElementById('btn_submit').addEventListener('click', () => {
      // 트레이너 정보 생성 동작
      if (_nameInput.value && _levelInput.value) {
        this.addTrainer(_nameInput.value, _levelInput.value)
      }
    })
  }

  // 최초 그려진후
  componentDidMount() {
    // 먼저 그리고
    this.render()
    // 이벤트를 걸어준다.
    this.bindEvent()
  }

  addTrainer(name, level) {
    fetch('http://localhost:3000/trainers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        level,
        attendanceStatus: 'DONE', // 'DONE' = 완료
      }),
    }).then((response) => {
      console.log(response)
    })
  }

  // 화면에 state 값을 표현하기 위한 용도
  render() {
    return ''
  }
}

new GymManagerComponent()
