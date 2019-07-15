// ----------------------
// -グローバルに登録
// ----------------------
// Vue.component("my-component", {
//   template: "<p>MyComponent</p>"
// });
// new Vue({
//   el: "#app"
// });

// ----------------------
// -ローカルへの登録
// ----------------------
// var myComponent = {
//   template: "<p>MyComponent</p>"
// };

// new Vue({
//   el: "#app",
//   components: {
//     "my-component": myComponent
//   }
// });

// ----------------------
// -コンポーネントのオプション
// ----------------------
Vue.component("my-component", {
  template: "<p>{{ message }}</p>",
  data: function() {
    // オブジェクトを返す関数
    return {
      message: "Hello Vue.js"
    };
  },
  methods: {
    // メソッドとか
  }
});
new Vue({
  el: "#app"
});
