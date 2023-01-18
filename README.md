<div align=center>

#### openai API를 활용한 챗봇 웹서비스
# **Chat Mung**

![chatmung](https://user-images.githubusercontent.com/80311884/235078388-48c99a31-e4b3-4e61-b117-c395ff3ad797.png)



2021년 HTML/CSS/JS만으로 구현한 규칙기반 단순 챗봇 서비스 ([깃허브 링크](https://github.com/hwanyb/chatMung.git))에 openai API를 활용한 인공지능 기능을 더해 만든 프로젝트입니다.



### [**🐶 챗멍 방문하기**](https://chatmung.herokuapp.com/) 

</div><br/><br/>

## 🔍 미리보기
### 규칙기반 단순 챗봇 기능
#### 다크모드
챗멍에게 불을 꺼 달라고 하면 다크모드로 변경됩니다. 다시 불을 켜달라고 말하면 다시 라이트모드로 돌아갑니다!

![불꺼줘](https://user-images.githubusercontent.com/80311884/215272259-0cbb88a9-a510-40f1-a0e0-b68e4c95cff2.gif)

#### 규칙기반 챗봇 기능
안녕, 반가워, 뭐해, 사랑해, 몇시야, 덥다, 춥다 등의 지정된 키워드가 입력되면 미리 지정해둔 반응을 합니다.

![안녕](https://user-images.githubusercontent.com/80311884/215272261-de8fff20-43b5-4101-b0c3-62d92c928f7b.gif)
![반가워](https://user-images.githubusercontent.com/80311884/215272249-046d8e37-129c-464e-b7cf-be941f2d32ce.gif)
![뭐해챗멍](https://user-images.githubusercontent.com/80311884/215272256-93d024df-1d56-407a-b9d7-e9c91521e397.gif)

### 인공지능 챗봇 기능
지정된 키워드 이외의 단어가 입력되면 openai API에 질문을 fetch하여 답변을 받아옵니다.

![새-비디오-만들기](https://user-images.githubusercontent.com/80311884/235083853-b9b24ddc-0ce9-4f58-94fb-dddb091952a9.gif)
![1](https://user-images.githubusercontent.com/80311884/235083885-ff20683c-c29a-4646-800f-5e7f66d72b63.gif)
![2](https://user-images.githubusercontent.com/80311884/235083923-1d0f42b7-ab97-457a-af2f-df9e58fa7d24.gif)


## 🕑 작업기간
[✔ 1차 기능](#1차-기능) :  2021.12 (약 5일) <br/>
[✔ 2차 기능](#2차-기능): 2023.01.18 (1일)<br/>

## 🛠기술 스택
<div align=left>
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/openai-412991?style=for-the-badge&logo=openai&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/heroku-430098?style=for-the-badge&logo=heroku&logoColor=white">

</div>

## 기능 소개

### 1차 기능
- 불꺼, 불켜 등의 키워드가 입력되면 배경을 블랙, 화이트로 변경시키는 기능
- 단순 규칙 기반 챗봇 기능 - 안녕, 반가워, 뭐해, 사랑해, 시간, 더워 등의 미리 지정해둔 키워드가 입력되면 정해진 말을 하는 기능
### 2차 기능
openAI API 를 활용한 인공지능 챗봇기능

## 📂 디렉토리 구조
```
chatmung
│  │  .env
│  .gitignore
│  index.js
│  package-lock.json
│  package.json
│  README.md
│
└─client
    │  package-lock.json
    │  package.json
    │
    ├─public
    │      chat.png
    │      dog.png
    │      favicon.ico
    │      index.html
    │      mung.mp3
    │
    └─src
            App.js
            index.js
            setupProxy.js
            style.css
```
## 🔧 설치 방법
```
git clone https://github.com/hwanyb/chatmung_v2.git
cd chatmung_v2
npm install
cd client
npm install
cd ../
npm run dev
```
