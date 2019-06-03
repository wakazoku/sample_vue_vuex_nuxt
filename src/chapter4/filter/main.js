var app = new Vue({
  el: "#app",
  data: {
    message: "Vue.jsの公式HPですよ",
    price: 19800
  },
  created: function() {},
  mounted: function() {},
  filters: {
    localNum: function(val) {
      return val.toLocaleString();
    },
    paramFilter: function(message, foo, num) {
      console.log(message, foo, num);
    },
    round: function(val) {
      return Math.round(val * 100) / 100;
    },
    radian: function(val) {
      return (val * Math.PI) / 180;
    }
  },
  computed: {},
  watch: {},
  methods: {}
});
