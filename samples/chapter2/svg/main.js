var state = { count: 0 };
var app = new Vue({
  el: "#app",
  data: {
    message: "Vue.js!",
    radius: 50
  },
  methods: {
    inclement: function() {
      this.count += 1;
    }
  }
});
