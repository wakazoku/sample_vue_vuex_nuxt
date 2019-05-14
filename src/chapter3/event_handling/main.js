var app = new Vue({
  el: "#app",
  data: {
    message: "Vue.jsの公式HPですよ",
    count: 0
  },
  created: function() {},
  mounted: function() {},
  methods: {
    handleClick: function() {
      alert("clicked!!");
    }
  }
});
