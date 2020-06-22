<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld v-bind:title="message" v-bind:num="num" /> -->
    <SampleComputed title="サンプルComputed" />
    <SampleWatch title="サンプルWatch" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import SampleComputed from "./components/SampleComputed.vue";
import SampleWatch from "./components/SampleWatch.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    SampleComputed,
    SampleWatch,
  },
  data: function() {
    return {
      message: "validate",
      num: 0.4,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
