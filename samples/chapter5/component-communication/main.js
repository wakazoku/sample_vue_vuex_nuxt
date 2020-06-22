// ----------------------
// -コンポーネントにリアクティブデータを渡す
// ----------------------
// Vue.component("comp-child", {
//   template: "<p>{{ val }}</p>",
//   props: ["val"]
// });
// new Vue({
//   el: "#app",
//   data: {
//     message: "v-bindから"
//   }
// });

// ----------------------
// -コンポーネントに対する属性付与
// ----------------------
// Vue.component("comp-child", {
//   template: "<p id='child' class='child'>ChildComponent</p>"
// });
// new Vue({
//   el: "#app",
//   data: {
//     message: "v-bindから"
//   }
// });

// ----------------------
// -コンポーネントをリストレンダリングする
// ----------------------
// Vue.component("comp-child", {
//   template: "<li>{{ name }} HP.{{ hp }}</li>",
//   props: ["name", "hp"]
// });
// new Vue({
//   el: "#app",
//   data: {
//     list: [
//       { id: 1, name: "スライム", hp: 100 },
//       { id: 2, name: "ゴブリン", hp: 200 },
//       { id: 3, name: "ドラゴン", hp: 500 }
//     ]
//   }
// });

// ----------------------
// -propsの受け取り型を指定する
// ----------------------
// Vue.component("comp-child", {
//   template: "<p>{{ val }}</p>",
//   props: {
//     val: Number
//   }
// });
// Vue.component("example", {
//   template:
//     "<p>{{ propA }}, {{ propB }}, {{ propC }}, {{ propD }},{{ propE }}</p>",
//   props: {
//     // 基本的な型チェック(`null`はどんな型でも受け付ける)
//     propA: Number,
//     // 複数の受付可能な型
//     propB: [String, Number],
//     // 必須な文字型
//     propC: {
//       type: String,
//       required: true
//     },
//     // デフォルト値
//     propD: {
//       type: Number,
//       default: 100
//     },
//     // オブジェクトと配列のデフォルトは
//     // ファクトリ関数から返すようにしています
//     propE: {
//       type: Object,
//       defaut: function() {
//         return { message: "hello" };
//       }
//     },
//     propF: {
//       valudator: function(value) {
//         return value > 10;
//       }
//     }
//   }
// });

// new Vue({
//   el: "#app",
//   data: {
//     num: 1 + 2
//   }
// });

// ----------------------
// -子から親へ
// ----------------------
// Vue.component("comp-child", {
//   template: "<button v-on:click='handleClick'>イベント発火</button>",
//   methods: {
//     // ボタンのクリックイベントのハンドラでchilds-eventを発火させる
//     handleClick: function() {
//       this.$emit("childs-event");
//     }
//   }
// });

// new Vue({
//   el: "#app",
//   methods: {
//     // childs-eventsが発生
//     parentMethod: function(){
//       alert('イベントキャッチ')
//     }

//   },
//   data: {}
// });

// ----------------------
// -親が持つデータお操作しよう
// ----------------------
// Vue.component("comp-child", {
//   template:
//     "<li> {{ name }} HP. {{ hp }} <button v-on:click='doAttack'>攻撃する</button></li> ",
//   props: { id: Number, name: String, hp: Number },
//   methods: {
//     // ボタンのクリックイベントのハンドラでchilds-eventを発火させる
//     doAttack: function() {
//       // 引数として自分のIDを渡す
//       this.$emit("attack", this.id);
//     }
//   }
// });

// new Vue({
//   el: "#app",
//   data: {
//     list: [
//       { id: 1, name: "スライム", hp: 100 },
//       { id: 2, name: "ゴブリン", hp: 200 },
//       { id: 3, name: "ドラゴン", hp: 500 }
//     ]
//   },
//   methods: {
//     // attackが発生
//     handleAttack: function(id) {
//       // 引数のIDから要素を検索
//       var item = this.list.find(function(el) {
//         return el.id === id;
//       });
//       // HPが0より大きければ10減らす
//       if (item !== undefined && item.hp > 0) item.hp -= 10;
//     }
//   }
// });

// ----------------------
// - 非親子コンポーネント
// ----------------------
var bus = new Vue({
  data: {
    count: 0
  }
});
bus.$emit("bus-event");
bus.$on("bus-event", function() {
  // busのイベントが起きたときにする処理
  // 無名関数内のthisはbusのインスタンス
});
