<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <pre @click="clear">{{ message }}</pre>
    <hr />
    <div id="out" class="out" @click="aEvent">
      A
      <div id="mid" class="mid" @click.self="bEvent">
        B
        <div id="in" class="in" @click="cEvent">C</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop({ default: "title" })
  title!: string;

  message = "message";

  aEvent(event: Event): void {
    console.log(event);
    if (
      event.target instanceof HTMLElement &&
      event.currentTarget instanceof HTMLElement
    ) {
      this.message += `A-Event [ ${event.target.id} → ${event.currentTarget.id} ]\n`;
    }
  }

  bEvent(event: Event): void {
    console.log(event);
    if (
      event.target instanceof HTMLElement &&
      event.currentTarget instanceof HTMLElement
    ) {
      this.message += `B-Event [ ${event.target.id} → ${event.currentTarget.id} ]\n`;
    }
  }

  cEvent(event: Event): void {
    console.log(event);

    if (
      event.target instanceof HTMLElement &&
      event.currentTarget instanceof HTMLElement
    ) {
      this.message += `C-Event [ ${event.target.id} → ${event.currentTarget.id} ]\n`;
    }
  }

  clear(): void {
    this.message = "";
  }
}
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
div.out {
  padding: 5px 0;
  background-color: #eee;
  width: 300px;
  height: 200px;
}
div.mid {
  padding: 5px 0;
  background-color: #ddd;
  width: 200px;
  height: 175px;
}
div.in {
  padding: 5px 0;
  background-color: #ccc;
  width: 100px;
  height: 150px;
}
</style>
