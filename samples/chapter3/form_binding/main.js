var scroll = new SmoothScroll();
var app = new Vue({
  el: "#app",
  data: {
    message: "Vue.jsの公式HPですよ",
    checkbox: [],
    radio: "",
    preview: "",
    range: 50,
    scrollY: 0,
    timer: null
  },
  created: function() {
    // ハンドラを登録
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy: function() {
    // ハンドラを解除（コンポーネントやSPAの場合忘れずに）
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted: function() {},
  methods: {
    // 違和感のない程度に200ms間隔でscrollデータを更新する例
    handleScroll: function() {
      if (this.timer === null) {
        this.timer = setTimeout(
          function() {
            this.scrollY = window.scrollY;
            clearTimeout(this.timer);
            this.timer = null;
          }.bind(this),
          200
        );
      }
    },
    handleChange: function(event) {
      var file = event.target.files[0];
      if (file && file.type.match(/^image\/(png|jpg)$/)) {
        this.preview = window.URL.createObjectURL(file);
      }
    },
    scrollTop: function() {
      scroll.animateScroll(0);
    }
  }
});
