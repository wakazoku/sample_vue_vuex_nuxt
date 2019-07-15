var app = new Vue({
  el: "#app",
  data: {
    message: "Vue.jsの公式HPですよ",
    list: []
  },
  directives: {},
  created: function() {},
  mounted: function() {},
  filters: {},
  computed: {},
  watch: {
    list: function() {
      // 更新後のul要素の高さを取得できない
      console.log("通常", this.$refs.list.offsetHeight);
      // nextTickを使えばできる！
      this.$nextTick(function() {
        console.log("nextTick: ", this.$refs.list.offsetHeight);
      });
    }
  },
  methods: {}
});
