var app = new Vue({
  el: "#app",
  data: {
    message: "Vue.jsの公式HPですよ"
  },
  directives: {
    focus: {
      // 紐付いている要素がDOMに挿入されるとき
      inserted: function(el) {
        el.focus(); // 要素にフォーカスを当てる
      }
    },
    example: {
      bind: function(el, binding) {
        console.log("---------------v-example bind---------------");
        console.log(el, binding);
      },
      inserted: function(el, binding) {
        console.log("---------------v-example inserted---------------");
        console.log(el, binding);
      },
      update: function(el, binding) {
        console.log("---------------v-example update---------------");
        console.log(el, binding);
      },
      componentUpdated: function(el, binding) {
        console.log("---------------v-example componentUpdated---------------");
        console.log(el, binding);
      },
      unbind: function(el, binding) {
        console.log("---------------v-example unbind---------------");
        console.log(el, binding);
      }
    }
  },
  created: function() {},
  mounted: function() {},
  filters: {},
  computed: {},
  watch: {},
  methods: {}
});
