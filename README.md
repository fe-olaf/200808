# Github Study

README.md 라는 파일은 프로젝트의 소개글을 의미한다.

### Markdown

마크다운은 String 을 Html 태그로 변환해준다.

- .md 는 마크다운 확장자를 의미한다.

```js
/* initialize.js */

import {KAKAO_KEY} from '../const/config';

const {Kakao} = window;

export default function initialize() {
  Kakao.init(KAKAO_KEY);
}
```

- [링크](www.naver.com)

![짱구](https://img.insight.co.kr/static/2021/01/10/700/img_20210110130830_kue82l80.webp)

### VS code 내에서의 파일 색상 의미

- 초록색: 추가된파일


### Github 

git status

현재 git 이 알고있는 파일 상태

- 파일이 빨간색이라면 git 은 현재 변경된 상태를 모른다.

- 올리기 위한 단계 1. commit -> 2. push