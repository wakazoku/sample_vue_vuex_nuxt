# このリポジトリは
体系的に Vue 周りを勉強したいので以下の本を写経したりします  
https://cr-vue.mio3io.com/

## Browsersync を使う
https://www.browsersync.io/

### グローバルインストールする
```
npm install -g browser-sync
```

### ローカルサーバーを起動する
src以下のファイルの更新を監視する。  
http://localhost:3000/src/cahpter{number}/{*}
```
browser-sync start --server --files './src'
```
