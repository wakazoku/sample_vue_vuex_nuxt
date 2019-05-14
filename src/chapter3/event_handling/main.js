var app = new Vue({
  el: "#app",
  data: {
    message: "Vue.jsの公式HPですよ",
    count: 0,
    show: false
  },
  created: function() {},
  mounted: function() {},
  methods: {
    handleClick: function(param1) {
      alert(param1);
    },
    handler: function(event) {
      console.log(event);
    },
    handleInput: function(event) {
      // ここにバリデータとか色々前処理を入れたりもできる
      this.message = event.target.value;
    }
  }
});
