<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr />
    <pre>{{ now }}</pre>
    <router-link to="/other">Go to Other</router-link>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  title = 'Hello'
  message = 'this is message.'
  now = 'wait...'

  created(): void {
    setInterval(() => {
      const date = new Date()
      this.now = `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`
    }, 1000)
  }
}
</script>

<style>
.container {
  padding: 5px 10px;
}

h1 {
  padding-top: 5px;
  font-size: 60px;
}

p {
  padding-top: 5px;
  font-size: 20pt;
}
a {
  font-size: 16pt;
}

pre {
  padding: 10px;
  font-size: 16pt;
  background-color: #efefef;
}

hr {
  margin: 10px 0px;
}
</style>
