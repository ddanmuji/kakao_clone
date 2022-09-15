# ⌨️ KaKao Talk 클론코딩

react, nodejs, websocket 으로 간단하게 클론

- [web_client](https://github.com/ddanmuji/kakao_clone/tree/master/packages/web_client) with react
- [server_api](https://github.com/ddanmuji/kakao_clone/tree/master/packages/server_api) with nodejs

<br />

## ⚙️ setting

- clone 후 git hook이 정상적으로 동작하지 않는다면 다음 명령어 실행

```
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
```

<br />

- .env 구성

```
PORT=...
ORIGIN=...
SESSION_SECRET_KEY=...
```
