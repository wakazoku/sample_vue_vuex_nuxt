// ----------------------
// -コンポーネントのオプション
// ----------------------
Vue.component("comp-child", {
  template: "<section class='comp-child'>\
                <header>\
                  <slot name='header'>デフォルトタイトル</slot>\
                </header>\
                <div class='content'>\
                  <slot>デフォルトコンテンツ</slot>\
                </div>\
                <slot name='footer'>\
                  \
                </slot>\
             </section>\
  ",
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
