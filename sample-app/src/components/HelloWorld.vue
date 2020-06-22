<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr />
    <p>Number: {{ num }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: String,
    num: {
      type: Number,
      default: 100,
      validator: function(value) {
        return value == parseInt(value) && value >= 0 && value <= 100;
      },
    },
  },
  data: function() {
    return {
      message: "バリデーションチェック",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
