<template>
  <div id="app">
    <Calc v-bind:title="message" v-on:result-event="appAction" />
    <hr />
    <div><table v-html="log"></table></div>
  </div>
</template>

<script>
import Calc from "./components/Calc.vue";

export default {
  name: "App",
  components: {
    Calc,
  },
  data: function() {
    return {
      message: "CALC",
      result: [],
    };
  },
  computed: {
    log: function() {
      let table =
        '<tr><th class="head">Expression</th><th class="head">Value</th></tr>';
      for (let i in this.result) {
        table += `<tr><td>${this.result[i][0]}</td><th>${this.result[i][0]}</th></tr>`;
      }
      return table;
    },
  },
  created: function() {
    let items = localStorage.getItem("log");
    let logs = JSON.parse(items);
    if (logs != null) this.result = logs;
  },
  methods: {
    appAction: function(exp, res) {
      this.result.unshift([exp, res]);
      if (this.result.length > 10) this.result.pop();
      let log = JSON.stringify(this.result);
      localStorage.setItem("log", log);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 5px;
}

tr td {
  padding: 5px;
  border: 1px solid gray;
}
tr th {
  padding: 5px;
  border: 1px solid gray;
}
tr th.head {
  background-color: black;
  color: white;
}
</style>
