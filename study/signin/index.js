/**
 * 과제
 * 1. 값이 하나라도 입력되지 않았다면 로그인버튼 미동작처리
 * 2. 이메일 비밀번호 체크하여 로그인 성공 및 실패 처리
 *
 * 3. 로그인이 성공했다면 유저 이메일정보와 이름 화면에 노출
 */

document.getElementById('btn_submit').addEventListener('click', () => {
  fetch('http://localhost:3000/user').then((response) => {
    // response.json()
    // 받아온 데이터를 실제로 사용하기 위해 실행하는 함수
    response.json().then((data) => {
      console.log('data', data)
    })
  })
})
