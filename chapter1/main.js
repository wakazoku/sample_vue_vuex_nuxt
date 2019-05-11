var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js",
    list: ["りんご", "バナナ", "いちご"],
    count: 0,
    show: true,
    show2: true
  },
  methods: {
    handleClick: function(event) {
      // alert(event.target);
      alert(app.message);
      console.log(event.target);
    },
    toggle: function() {
      if (app.show) {
        app.show = false;
        return;
      }
      app.show = true;
    }
  }
});
