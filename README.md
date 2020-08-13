# bmart-8
노기진, 김한, 김현영 - 모바일 B마트 만들기

# Install
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
