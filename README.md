# algo_game

暇な時に遊ぶ用にゲームを作ってみよう、というプロジェクト

## set up

（docker とか Makefile を用意した方が良いかも）

```
$ npm ci
$ cd backend && npm ci && cp .env.local .env
$ cd frontend && npm ci

# それぞれのディレクトリで
$ npm run start
```
