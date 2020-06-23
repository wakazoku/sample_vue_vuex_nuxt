<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr />
    <router-link to="/">Go to Top</router-link>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Other extends Vue {
  title = 'Other'
  message = 'ここは、別のページです'
}
</script>

<style scoped>
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

hr {
  margin: 10px 0px;
}
</style>
