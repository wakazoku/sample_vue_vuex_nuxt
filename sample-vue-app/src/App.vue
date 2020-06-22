<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <HelloWorld v-bind:title="message" />
      <hr />
      <button v-on:click="changeTitle">change title</button>
    </div>
    <div>
      <HelloWorld v-bind:title="message" v-on:result-event="eventAction" />
      <hr />
      <button v-on:click="changeTitle">change title</button>
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data: function() {
    return {
      message: "Hello",
      result: "no event.",
    };
  },
  methods: {
    changeTitle: function() {
      const input = prompt("new title:");
      this.message = input;
    },
    eventAction: function(message) {
      this.result = `*** you sent: "${message}". ****`;
    },
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
