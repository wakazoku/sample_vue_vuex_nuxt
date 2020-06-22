var app = new Vue({
  el: "#app",
  data: {
    message: "Vue.jsの公式HPですよ",
    name: "",
    fruitsList: ["apple", "banana", "grape"],
    list: [],
    current: "",
    topics: [
      { value: "Vue", name: "Vue.js" },
      { value: "jQuery", name: "jQuery" }
    ]
  },
  created: function() {},
  mounted: function() {},
  computed: {},
  watch: {
    fruitsList: {
      handler: function() {
        // fruitsListが変化したときに行いたい処理cx
        console.log(this.name + "が追加された！！！!");
        this.name = "";
      },
      deep: true,
      immediate: true
    },
    current: function(val) {
      // GitHubのAPIからトピックのリポジトリを検索
      axios
        .get("https://api.github.com/search/repositories", {
          params: { q: "topic:" + val }
        })
        .then(
          function(response) {
            this.list = response.data.items;
          }.bind(this)
        );
    }
  },
  methods: {
    addItem: function() {
      this.fruitsList.push(this.name);
    }
  }
});
