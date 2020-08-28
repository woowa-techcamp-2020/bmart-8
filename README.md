# Todo 2 Team

mobile B-mart 

## ✋Team Members
- [![title](https://img.shields.io/badge/DEVLOPER-김한-123456)](https://github.com/hanSong2)
- [![title](https://img.shields.io/badge/DEVLOPER-김현영-123456)](https://github.com/atobaum)
- [![title](https://img.shields.io/badge/DEVLOPER-노기진-123456)](https://github.com/nohgijin)
------

## ⚡️사용한 것들

### ✏️폰트

- [Gugi by TAE System & Typefaces Co.](https://fonts.google.com/specimen/Gugi?subset=korean&sidebar.open=true&selection.family=Gugi)

## 🧞Install

## Client

- `client` 디렉토리에서 다음 명령어를 실행합니다.

```shell
yarn && yarn build
```

## Server

- `docker-compose up -d`를 이용해 웹서버와 앱서버를 실행시킵니다.

# CD

- 클라이언트 코드가 수정되면 Github action으로 빌드 후 서버에 업로드 합니다.
- 서버 코드가 수정되면 Github action으로 서버의 빌드 스크립트를 실행합니다.
  - 서버 빌드 스크립트는 새로운 도커 컨테이너를 만듭니다.

## Setup

Github secrets에 다음 항목이 필요합니다:

- HOST: 웹서버 호스트
- USERNAME: 웹서버의 유저
- PRIVATE_KEY: ssh private key(pem format)
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY


------

## 기술 스택

**Common**
- ![title](https://img.shields.io/badge/-TypeScript-007acc?&logo=React&logoColor=white)
- ![title](https://img.shields.io/badge/-NPM-CC3534?&logo=NPM&logoColor=white)

**Frontend**
- ![title](https://img.shields.io/badge/-React-61dbfb?&logo=React&logoColor=white)
- ![title](https://img.shields.io/badge/-CSS-264de4?&logo=css&logoColor=white)
- ![title](https://img.shields.io/badge/-Webpack-1C78C0?&logo=Webpack&logoColor=white)
- ![title](https://img.shields.io/badge/-Babel-yellow?&logo=Babel&logoColor=white)

**Backend**
- ![title](https://img.shields.io/badge/-Node.js-339933?&logo=Node.js&logoColor=white)
- ![title](https://img.shields.io/badge/-Express-191919?&logo=Node.js&logoColor=white)
- ![title](https://img.shields.io/badge/-GraphQL-e535ab?&logo=Node.js&logoColor=white)
- ![title](https://img.shields.io/badge/-MySQL-4479A1?&logo=MySQL&logoColor=white)

**ETC**
- ![title](https://img.shields.io/badge/-EC2-232F3E?&logo=Amazon-AWS&logoColor=white)
- ![title](https://img.shields.io/badge/-Github-181717?&logo=Github&logoColor=white)
- ![title](https://img.shields.io/badge/-Slack-4A154B?&logo=Slack&logoColor=white)


------
