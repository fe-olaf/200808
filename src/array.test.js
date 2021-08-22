/**
 * 트레이너 관리 시스템
 *
 * 1. 트레이너 등록 (이름, 나이, 연락처, 자격증 유무, 출근 여부, 참고)
 * 2. 트레이너 삭제
 * 3. 트레이너 정보 수정
 * 4. 출근한 트레이너만 보기
 * 5. 자격증을 가지고 있는 트레이너만 보기
 * 6. 전체 트레이너 목록 출력
 * 7. 1명이라도 출근했다면 OR(some)
 * 8. 모두 자격증가지고 있는지 AND(every)
 */

// 한 명의 트레이너 정보

const trainer = {
  name: '김복자',
  age: 40,
  phone: '010-1234-1234',
  isCertified: true,
  isAttendance: true,
  memo: '베테랑 피티 강사',
}

const trainer2 = {
  name: '김말자',
  age: 25,
  phone: '010-1234-1234',
  isCertified: false,
  isAttendance: false,
  memo: '신입 피티 강사',
}

const trainers = [trainer, trainer2]

describe('Array 테스트', () => {
  it('트레이너가 추가되면 length 가 1 이 증가한다.', () => {
    // 1. 트레이너 추가

    const newTrainer = {
      name: '김수정',
      age: 30,
      phone: '010-1234-1234',
      isCertified: true,
      isAttendance: true,
      memo: '신입 피티 강사',
    }

    const newTrainers = [...trainers, newTrainer]

    expect(trainers.length).toBe(2)
    expect(newTrainers.length).toBe(3)
  })

  it('트레이너가 삭제되면 length 가 1이 줄어든다.', () => {
    const removedTraniers = trainers.filter((trainer) => {
      return trainer.name !== '김말자'
    })

    expect(trainers.length).toBe(2)
    expect(removedTraniers.length).toBe(1)
  })

  it('두 번째 트레이너의 출근 상태를 false 에서 true 로 변경한다.', () => {
    const updatedTrainers = trainers.map((trainer) => {
      return trainer.name === '김말자'
        ? { ...trainer, isAttendance: true }
        : trainer
    })

    expect(updatedTrainers[1].isAttendance).toBe(true)
  })

  it('출근한 트레이너는 1명이다.', () => {
    const filteredTraniners = trainers.filter((trainer) => {
      return trainer.isAttendance
    })

    expect(filteredTraniners.length).toBe(1)
  })

  it('자격증을 가진 트레이너는 1명이다.', () => {
    const filteredTraniners = trainers.filter((trainer) => {
      return trainer.isCertified
    })

    expect(filteredTraniners.length).toBe(1)
  })

  it('1명이라도 출근했다면 리턴값은 true 이다.', () => {
    const isAttendance = trainers.some((trainer) => {
      return trainer.isAttendance
    })

    expect(isAttendance).toBe(true)
  })

  it('모두 자격증을 가지고 있다면 리턴값은 true 이다.', () => {
    const isCertified = trainers.every((trainer) => {
      return trainer.isCertified
    })

    expect(isCertified).toBe(false)
  })
})
