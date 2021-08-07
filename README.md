# Github Study

README.md 라는 파일은 프로젝트의 소개글을 의미한다.

### Markdown

마크다운은 String 을 Html 태그로 변환해준다.

- .md 는 마크다운 확장자를 의미한다.

```js
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
- 누런색: 기존의 파일이 변화함
- 

### Github 

1. git status   
현재 git 이 알고 있는 파일 상태          
파일이 빨간색이라면 git 은 현재 변경된 상태를 모른다.

```
$ git status 
```

2. git add 
현재 변경 사항을 git 한테 알려준다.

```
$ git add .
```

. 은 내가 위치한 곳의 모든 파일을 의미

3. git commit
commit 은 하나의 작업을 의미한다.    
commit 은 메세지를 가진다. 

```
$ git commit -m "메세지"
```

4. git push 
commit 된 결과물들을 remote 서버에 반영한다.

```
$ git push origin <branch name>
```

master = branch name (기둥이되는 브랜치)


## NPM 

node package manager 

### package.json 
프로젝트에 대한 정보를 다 담고있다.  
내부에서 사용되는 라이브러리들, 단축 명령어 등등 ..

### install 
외부 라이브러리를 다운받는다.   
결과물은 node_modules 폴더 내부에 다운받아진다.

```
$ npm install or npm i <패키지>
$ npm install --save or npm i -S <패키지>
$ npm install --save-dev or npm i -D <패키지>
```