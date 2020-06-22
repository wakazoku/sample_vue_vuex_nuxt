var state = { count: 0 };
var app = new Vue({
  el: "#app",
  data: {
    name: null,
    list_json: [],
    list: [
      { id: 1, name: "スライム", hp: 100 },
      { id: 2, name: "ゴブリン", hp: 200 },
      { id: 3, name: "ドラゴン", hp: 500 }
    ]
  },
  created: function() {
    // リアクティブのlistにプロパティを後から追加する
    this.list.forEach(function(item) {
      this.$set(item, "active", false);
    }, this);

    // 外部からデータを取得する
    axios
      .get("list.json")
      .then(
        function(response) {
          console.log(response.data);
          this.list_json = response.data;
        }.bind(this)
      )
      .catch(function(e) {
        console.error(e);
      });
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
    },
    doAttack: function(index) {
      this.list[index].hp -= 10;
    }
  }
});
