var app = new Vue({
  el: "#app",
  data: {
    message: "Vue.jsの公式HPですよ",
    width: 800,
    height: 600,
    budget: 300,
    limit: 2,
    list: [
      { id: 1, name: "りんご", price: 100 },
      { id: 2, name: "ばなな", price: 200 },
      { id: 3, name: "いちご", price: 400 },
      { id: 4, name: "おれんじ", price: 300 },
      { id: 5, name: "めろん", price: 500 }
    ]
  },
  computed: {
    // 算出プロパティhalfwidthを定義
    halfWidth: {
      // return this.width / 2;
      get: function() {
        return this.width / 2;
      },
      set: function(val) {
        this.width = val * 2;
      }
    },
    halfHeight: function() {
      return this.height / 2;
    },
    halfPoint: function() {
      return {
        x: this.halfWidth,
        y: this.halfHeight
      };
    },
    coumputedData: function() {
      return Math.random();
    },
    matched: function() {
      return this.list.filter(function(el) {
        return el.price <= this.budget;
      }, this);
    },
    limited: function() {
      return this.matched.slice(0, this.limit);
    }
  },
  created: function() {
    console.log(this.halfWidth);
  },
  mounted: function() {},
  methods: {
    methodData: function() {
      return Math.random();
    }
  }
});
