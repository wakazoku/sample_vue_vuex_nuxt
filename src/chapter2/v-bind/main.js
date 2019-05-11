var state = { count: 0 };
var app = new Vue({
  el: "#app",
  data: {
    message: "Vue.js!",
    state: state,
    count: 0,
    classObject: {
      child: true,
      "is-active": true
    },
    styleObject: {
      color: "red",
      backgroundColor: "lightgray"
    },
    item: {
      id: 1,
      src: "item1.jpg",
      alt: "商品サムネイル",
      width: 200,
      height: 200
    }
  },
  methods: {
    inclement: function() {
      this.count += 1;
    }
  }
});
