<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <p v-html="message">no message</p>
    <hr />
    <router-link to="/">Go to Top</router-link>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

type params = {
  id: String
  pass: String
}

@Component
export default class Pass extends Vue {
  validate({ params }: { params: params }) {
    if (params.id === undefined || params.pass === undefined) {
      return false
    } else {
      return true
    }
  }

  title = 'Login'

  get message() {
    const id =
      this.$route.params.id !== undefined
        ? this.$route.params.id
        : '*** no id ***'

    const pass =
      this.$route.params.pass !== undefined
        ? this.$route.params.pass
        : '*** no pass ***'

    return `ID: ${id} <br> PASSWORD: ${pass} `
  }
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
