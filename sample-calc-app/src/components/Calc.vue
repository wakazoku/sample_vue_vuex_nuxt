<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr />
    <div>
      <div>
        <textarea v-model="fomula" cols="40" rows="5"></textarea>
      </div>
      <div>
        <button v-on:click="doAction">CALC</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calc",
  props: {
    title: String,
  },
  data: function() {
    return {
      message: "Enter expression",
      fomula: "0",
    };
  },
  methods: {
    doAction: function() {
      // fomulaのテキストを改行コードで分割し、配列にする
      console.log(this.fomula);
      let arr = this.fomula.trim().split("\n");
      console.log(arr);

      // 配列の最後の項目をlastに取り出す
      let last = arr.pop();
      console.log(last);

      let fn = "";
      for (let n in arr) {
        if (arr[n].trim() != "") {
          fn += `var ${arr[n]};`;
        }
      }
      console.log(fn);

      fn += `return ${last};`;
      console.log(fn);

      let exp = `function f(){ ${fn} } f()`;
      console.log(exp);

      // スクリプトのテキストを実行する
      let ans = eval(exp);
      console.log(ans);

      // 実行結果をmessageに設定
      this.message = `answer: ${ans}`;

      let re = arr.join(";").trim();
      if (re != "") re += ";";
      re += last;

      // イベントを呼び出す
      this.$emit("result-event", re, ans);
    },
  },
};
</script>
