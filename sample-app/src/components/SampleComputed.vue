<template>
  <div class="sample-computed">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr />
    <p>val: {{ val }}</p>
    <div>* 2: <input type="number" v-model="computedA" /></div>
    <div>^ 2: <input type="number" v-model="computedB" /></div>
  </div>
</template>

<script>
export default {
  name: "SampleComputed",
  props: {
    title: String,
  },
  data: function() {
    return {
      message: "値の監視 computed",
      val: 0,
    };
  },
  computed: {
    computedA: {
      get: function() {
        return this.val * 2;
      },
      set: function(value) {
        this.val = Math.floor(value / 2);
      },
    },
    computedB: {
      get: function() {
        return this.val * this.val;
      },
      set: function(value) {
        this.val = Math.floor(Math.sqrt(value));
      },
    },
  },
  created: function() {
    this.val = 10;
  },
};
</script>

<style scoped>
.sample-computed {
  border: 1px solid black;
  padding: 30px;
  margin: 30px;
}
</style>
