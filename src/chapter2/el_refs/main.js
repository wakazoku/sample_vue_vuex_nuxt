var app = new Vue({
  el: "#app",
  data: {
    show: true
  },
  created: function() {},
  mounted: function() {
    console.log("this.$el: ", this.$el);
    console.log("this.$refs.hello: ", this.$refs.hello);
  },
  methods: {
    handleClick() {
      var count = this.$refs.count;
      if (count) {
        count.innerText = parseInt(count.innerText, 10) + 1;
      }
    }
  }
});
