var state = { count: 0 };
var app = new Vue({
  el: "#app",
  data: {
    name: null,
    list: [
      { id: 1, name: "スライム", hp: 100 },
      { id: 2, name: "ゴブリン", hp: 200 },
      { id: 3, name: "ドラゴン", hp: 500 }
    ]
  },
  created: function() {
    this.list.forEach();
  },
  methods: {
    doAdd: function() {
      console.log(this.list);
      var max = this.list.reduce(function(a, b) {
        console.log("a: ", a.id);
        console.log("b: ", b.id);

        return a.id > b.id ? a.id : b.id;
      }, 0);
      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500
      });
    },
    doRemove: function(index) {
      this.list.splice(index, 1);
    }
  }
});
